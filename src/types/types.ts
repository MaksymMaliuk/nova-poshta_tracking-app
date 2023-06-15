interface DataItem {
  Number: string;
  StatusCode: string;
  Status: string;
  PossibilityCreateRedirecting: boolean;
  PossibilityCreateReturn: boolean;
  PossibilityCreateRefusal: boolean;
  PossibilityChangeEW: boolean;
  PossibilityChangeCash2Card: boolean;
  PossibilityChangeDeliveryIntervals: boolean;
  PossibilityTermExtension: boolean;
  PossibilityTrusteeRecipient: boolean;
  TrusteeRecipientPhone: string;
  PossibilityLightReturn: boolean;
  LightReturnNumber: string;
  SecurePayment: boolean;
  RecipientFullName: string;
  CargoDescriptionString: string;
  RedeliverySum: string;
  RedeliveryPayer: string;
  AfterpaymentOnGoodsCost: string;
  LastCreatedOnTheBasisPayerType: string;
  LastTransactionDateTimeGM: string;
  CounterpartySenderDescription: string;
  CounterpartyRecipientDescription: string;
  SenderAddress: string;
  RecipientAddress: string;
  AnnouncedPrice: string;
  RedeliveryPaymentCardRef: string;
  RedeliveryPaymentCardDescription: string;
  CreatedOnTheBasis: string;
  ExpressWaybillPaymentStatus: string;
  ExpressWaybillAmountToPay: string;
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