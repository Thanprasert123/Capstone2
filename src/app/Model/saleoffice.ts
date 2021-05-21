export class Saleoffice {
    PONumber : string | undefined;
    TIME_IN : string | undefined;
    TIME_OUT : string | undefined;
    TOTAL_TIME : string | undefined;
    DATE : Date | undefined;
    OrderName : string | undefined;
    VehicleNo : string | undefined;
    OrderID : number | undefined;

}
export interface SaleofficeAll {
    result : Saleoffice[],
    message : string

}

