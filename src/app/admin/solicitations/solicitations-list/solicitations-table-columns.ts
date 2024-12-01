import { TableColumns } from "../../../shared/components/commom-table/commom-table.component";


export const solicitationTableColumns: TableColumns[] = [
  { column: 'Player', key: 'playerName', type: 'commom' },
  { column: 'Tournament name', key: 'tournamentName', type: 'commom' },
  { column: 'Country', key: 'tournamentCountry', type: 'commom' },
  { column: 'State', key: 'tournamentState', type: 'commom' },
  { column: 'City', key: 'tournamentCity', type: 'commom' },
  { column: 'Status', key: 'status', type: 'commom' },
];
