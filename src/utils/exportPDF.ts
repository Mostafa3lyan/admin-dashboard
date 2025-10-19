import { User } from '@/components/data-table';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


export function exportToPDF(data: User[], filename = 'export.pdf') {
  const doc = new jsPDF();
  if (!data || data.length === 0) {
    doc.text('No data', 10, 10);
    doc.save(filename);
    return;
  }
  const columns = ['name', 'email', 'phone'];
  const rows = data.map(d => [d.name, d.email, d.phone]);
  autoTable(doc, { head: [columns], body: rows, startY: 10 });
  doc.save(filename);
}
