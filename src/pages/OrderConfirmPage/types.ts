import { Address } from "../../model";

export interface Fee {
  itemNum: number;
  item: number;
  service: number;
  delivery: number;
  total: number;
}

export interface DeliveryForm {
  address: Address;
  instructions: string;
}
