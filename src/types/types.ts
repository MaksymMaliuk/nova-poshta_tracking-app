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
  errors: string[];
  warnings: Warning[];
  info: string[];
  messageCodes: string[];
  errorCodes: string[];
  warningCodes: string[];
  infoCodes: string[];
}