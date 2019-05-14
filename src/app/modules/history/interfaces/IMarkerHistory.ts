export interface ISublist {
  amount: number;
  code_product: string;
  name: string;
  price?: number;
}

export interface IComposition {
  name: string;
  amount: number;
  price: number;
  code: string;
  total?: number;
  sublist?: ISublist[];
}

export interface IMarkerHistory {
  id: number;
  created_at: Date | string;
  composition: IComposition[];
  total: number;
  cpv: number;
  bpv: number;
  status: string;
  code?: string;
}
