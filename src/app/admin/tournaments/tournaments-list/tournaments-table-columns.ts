import { TableColumns } from "../../../shared/components/commom-table/commom-table.component";


export const tournamentsTableColumns: TableColumns[] = [
  { column: 'Date', key: 'startDate', type: 'date' },
  { column: 'Time', key: 'startTime', type: 'time' },
  { column: 'Tournament title', key: 'title', type: 'commom' },
  { column: 'Awards', key: 'prize', type: 'currency' },
  { column: 'Event link', key: 'eventUrl', type: 'commom' },
  { column: 'Status', key: 'status', type: 'commom' },
];
