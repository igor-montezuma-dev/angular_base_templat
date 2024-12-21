export type IPagination<T> = {
  data: T[];
  page: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};
