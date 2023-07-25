import { OrderData } from './Order';
import { WarehouseData } from './Warehouse';

export type DataResponse = OrderData[] | WarehouseData[];

interface Warning {
  [key: string]: string;
}

export interface Response<T> {
  success: boolean;
  data: T;
  errors: string[];
  warnings: Warning[];
  info: string[];
  messageCodes: string[];
  errorCodes: string[];
  warningCodes: string[];
  infoCodes: string[];
}
