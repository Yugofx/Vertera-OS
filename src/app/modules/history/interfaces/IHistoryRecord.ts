export interface IHistoryRecord {
  delivery_cost: number;
  consumer_data: {
    id: number;
    status: string;
    user: string;
    created_at: string | Date;
    country: string;
    city: string;
    zip: string;
    building: string;
    street: string;
    apartment: string;
    delivery_method: string;
    email: string;
    phone_number: string;
    comment: string;
  };
  products: any[];
}
