import { TableColumns } from "../../../shared/components/commom-table/commom-table.component";


export const configTableColumns: TableColumns[] = [
  { column: 'Cód', key: 'id', type: 'commom' },
  { column: 'Nome', key: 'name', type: 'commom' },
  { column: 'Email', key: 'email', type: 'commom' },
  { column: 'Acesso', key: 'role', type: 'commom' },
  { column: 'Status', key: 'status', type: 'commom' },
];
