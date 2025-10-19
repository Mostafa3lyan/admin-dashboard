"use client";
import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { exportToXLSX } from "@/utils/exportXLSX";
import { exportToPDF } from "@/utils/exportPDF";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const { allUsers, isLoading, error } = useSelector(
    (state: RootState) => state.user
  );

  const columns: ColumnDef<User>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "Phone" },
  ];

  const globalFilterFn = (
    row: { original: User },
    _columnId: string,
    filterValue: string
  ) => row.original.name.toLowerCase().includes(filterValue.toLowerCase());

  const table = useReactTable({
    data: allUsers || [],
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn,
  });

  if (isLoading)
    return <p className="text-center py-8 text-muted-foreground">Loading...</p>;
  if (error)
    return (
      <p className="text-center py-8 text-red-500">Error: {String(error)}</p>
    );

  const filtered = table.getFilteredRowModel().rows.map((row) => row.original);

  return (
    <div className="space-y-4 w-full">
      {/* Filter + Export buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <Input
          placeholder="Search by name..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm w-full sm:w-auto"
        />
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => exportToXLSX(filtered, "table-data.xlsx")}
          >
            Export XLSX
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => exportToPDF(filtered, "table-data.pdf")}
          >
            Export PDF
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full rounded-md border">
        <Table className="w-full min-w-[600px]">
          <TableHeader className="bg-muted sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  const sorted = header.column.getIsSorted();
                  return (
                    <TableHead
                      key={header.id}
                      onClick={
                        canSort
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                      className={`cursor-pointer select-none ${
                        canSort ? "hover:text-foreground transition-colors" : ""
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {canSort && (
                          <>
                            {sorted === "asc" && <IconChevronUp size={16} />}
                            {sorted === "desc" && <IconChevronDown size={16} />}
                            {!sorted && (
                              <IconChevronUp
                                size={16}
                                className="opacity-20 rotate-180"
                              />
                            )}
                          </>
                        )}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-6"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center gap-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </Button>

        {Array.from({ length: table.getPageCount() }, (_, i) => (
          <Button
            key={i}
            size="sm"
            variant={
              table.getState().pagination.pageIndex === i
                ? "default"
                : "outline"
            }
            onClick={() => table.setPageIndex(i)}
          >
            {i + 1}
          </Button>
        ))}

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
