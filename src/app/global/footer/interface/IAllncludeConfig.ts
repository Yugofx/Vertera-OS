export interface IAbstract {
  number: string;
  mail: string;
  timework: string;
}

export interface IConsult extends IAbstract {
  link: string;
}

export interface ISocial {
  name: string;
  link: string;
}

export interface IProdDelivery extends IAbstract {
  skype: string;
}

export interface IServiceCenter extends IAbstract {
  skype: string;
}
