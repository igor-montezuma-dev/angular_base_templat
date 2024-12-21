import { TableColumns } from "../../../shared/components/commom-table/commom-table.component";


export const formsTableColumns: TableColumns[] = [
  { column: 'Created At', key: 'createdAt', type: 'date' },
  { column: 'Title', key: 'title', type: 'commom' },
  { column: 'Status', key: 'status', type: 'commom' },
];
