export type Admin = {
  id: number;
  name: string;
  document: string;
  email: string;
  password: string;
  type: string;
  modules: string[];
  status: string;
};

export type IAdminResponse = {
  data: Admin[];
  totalItems: number;
  totalPages: number;
  itemsPerPage: number;
  page: number;
};

