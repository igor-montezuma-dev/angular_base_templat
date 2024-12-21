export type IUser = {
  id: number;
  name: string;
  birthday: string;
  phone: string;
  email: string;
  imageUrl: string;
}

export type IUserResponse = {
  data: IUser[];
  totalItems: number;
  totalPages: number;
  page: number;
};
