export class CartModel {
  id: string;
  name: string;
  image: string;
  price: { code: string; label: string; total: number };
  points: { cpv: number; bpv: number };
  count: number;
  complex: Array<{ id: string; name: string; count: number }>;

  constructor(item, currency) {
    this.id = item.entity_id;
    this.name = item.name;
    this.image = item.image;
    this.price = { code: currency.iso, label: currency.name, total: item.price };
    this.points = item.points;
    this.count = item.qty;
    this.complex = item.complex;
  }
}
