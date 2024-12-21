
export type Tournament = {
  id: string;
  type: string;
  title: string;
  description: string;
  rules: string;
  prize: number;
  startDatetime: string;
  finalDatetime: string;
  time: string;
  eventUrl: string;
  imageUrl: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  formId: string;
  location: {
    zipCode: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    lat: string | null;
    lng: string | null;
  }
};
