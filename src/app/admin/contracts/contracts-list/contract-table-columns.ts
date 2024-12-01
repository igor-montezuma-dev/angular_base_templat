import { TableColumns } from "../../../shared/components/commom-table/commom-table.component";


export const contractTableColumns: TableColumns[] = [
  { column: 'Player', key: 'userName', type: 'commom' },
  { column: 'Value', key: 'value', type: 'currency' },
  { column: 'Start At', key: 'startsAt', type: 'commom' },
  { column: 'Ends At', key: 'endsAt', type: 'commom' },
  { column: 'Status', key: 'status', type: 'commom' },
];
