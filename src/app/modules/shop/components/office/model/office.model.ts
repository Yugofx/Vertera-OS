export class OfficeModel {
  id: number;
  title: string;
  company_name: string;
  phone: string;
  email: string;
  address: string;
  work_hours: { start: string; end: string };
  message: string;
  currencies: Array<{ code: string; label: string }>;

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.company_name = data.company_name;
    this.phone = data.phone;
    this.email = data.email;
    this.address = data.address;
    this.work_hours = data.work_hours;
    this.message = data.message;
    this.currencies = data.currencies;
  }
}
