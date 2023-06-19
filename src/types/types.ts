export interface DataItem {
  Number: string;
  StatusCode: string;
  Status: string;
  WarehouseSender: string
  WarehouseRecipient: string
}

interface Warning {
  [key: string]: string;
}

export interface Response {
  success: boolean;
  data: DataItem[];
  errors: any[];
  warnings: Warning[];
  info: any[];
  messageCodes: any[];
  errorCodes: any[];
  warningCodes: any[];
  infoCodes: any[];
}