export type Player = {
  id: string;
  role: string;
  name: string;
  birthday: string;
  phone: string;
  gender: string;
  email: string;
  status: string;
  imageUrl: string | null;
  reprovedDueTo: string | null;
  location: {
    city: string;
    state: string;
    lat: string | null;
    lng: string | null;
  }
};
