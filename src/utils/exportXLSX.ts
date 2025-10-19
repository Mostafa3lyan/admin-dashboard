import { User } from '@/components/data-table';
import * as XLSX from 'xlsx';


export function exportToXLSX(data: User[], filename = 'export.xlsx') {
  const filteredData = data.map(d => ({
    name: d.name,
    email: d.email,
    phone: d.phone
  }));
  const ws = XLSX.utils.json_to_sheet(filteredData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, filename);
}
