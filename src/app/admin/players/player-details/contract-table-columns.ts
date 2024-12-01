import { TableColumns } from "../../../shared/components/commom-table/commom-table.component";


export const contactTableColumns: TableColumns[] = [
  { column: 'Value', key: 'value', type: 'currency' },
  { column: 'Start At', key: 'startsAt', type: 'commom' },
  { column: 'End At', key: 'endsAt', type: 'commom' },
  { column: 'Status', key: 'status', type: 'commom' },
];
