export class CatalogCardModel {
  id: string;
  name: string;
  image: string;
  group_id: string;
  currency: { code: string; label: string };
  price: number;
  points: { cpv: string; bpv: string };
  count: number;
  in_promotion: boolean;
}
