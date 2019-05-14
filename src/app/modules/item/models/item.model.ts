export class ItemModel {
  id: string;
  name: string;
  name_translation: string;
  image: string;
  group_id: string;
  prices: Array<{ code: string; label: string; price: number }>;
  points: { cpv: string; bpv: string };
  count: number;
  package_quantity: { measure: string; count: number };
  overview: string; // HTML string
  details: string; // HTML string
  ingredients: string; // HTML string
  use: string; // HTML string
}
