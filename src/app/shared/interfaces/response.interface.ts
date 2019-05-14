export interface IResponse {
  data: any;
  code: number;
  ok: boolean;
  error: any;
  user: { id: number };
}
