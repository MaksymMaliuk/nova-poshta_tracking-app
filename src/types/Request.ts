export type ModelName = 'Address' | 'TrackingDocument'
export type CalledMethod = 'getStatusDocuments' | 'getWarehouses'

export interface RequestBody {
  API_KEY?: string
  modelName: ModelName
  calledMethod: CalledMethod
  methodProperties: MethodProperties
}

interface Document {
  DocumentNumber?: string;
}

export interface MethodProperties {
  Documents?: Document[];
  CityName?: string
  WarehouseId?: string
}
