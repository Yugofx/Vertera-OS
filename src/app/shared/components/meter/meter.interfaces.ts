export interface IValidators {
  id: string;
  label: string;
  pattern: RegExp;
  passed?: boolean;
  value?: number;
  hidden?: boolean;
}
