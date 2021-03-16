import { Payment } from './Payment';
export interface IRent{
  pickup:Date;
  devolution:Date;
  payment:Payment;
  carId:number;
  userId:number;
}
