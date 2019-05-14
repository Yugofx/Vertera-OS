import { IConsult, IProdDelivery, IServiceCenter, ISocial } from './IAllncludeConfig';

export interface IFooterConfig {
  consult: IConsult;
  socials: ISocial[];
  proddelivery: IProdDelivery;
  serviceCenter: IServiceCenter;
  copyright: string;
}
