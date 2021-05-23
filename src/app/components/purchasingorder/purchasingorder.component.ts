import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-purchasingorder',
  templateUrl: './purchasingorder.component.html',
  styleUrls: ['./purchasingorder.component.css']
})
export class PurchasingorderComponent implements OnInit {

  public userArray: Array<P_Order> = [];
  public ip_order_id: Array<any> = [];
  public p_number: string = '';
  public data: any = {}
  //File upload function
  constructor(private http: HttpClient) {
    this.http.get('assets/mocData/Purchase order .csv', { responseType: 'text' }).subscribe(
      data => {
        let csvToRowArray = data.split("\n");
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(",");
          this.userArray.push(new P_Order(row));
          this.ip_order_id.push(row[0])
        }
        this.p_number = this.ip_order_id[0]
        this.data = this.userArray[0]
        console.log(this.userArray);
        console.log(this.ip_order_id)
      }
    )
  }

  selectID() {
    let i = this.ip_order_id.indexOf(this.p_number)
    this.data = this.userArray[i]
    console.log(i)
  }

  ngOnInit(): void {
  }
}

class P_Order {
  PO_NUMBER: string | undefined;
  PaymentNO: string | undefined;
  DATE: string | undefined;
  PARTOL_TYPE: string | undefined;
  Q_ty: string | undefined;
  AMOUNT: string | undefined;
  Price_Liter: string | undefined;
  shipping_Address: string | undefined;
  CompanyID: string | undefined;
  Companyname: string | undefined;
  TaxNumber: string | undefined

  constructor(dat: Array<any>) {
    this.PO_NUMBER = dat[0];
    this.PaymentNO = dat[1];
    this.DATE = dat[2];
    this.PARTOL_TYPE = dat[3];
    this.Q_ty = dat[4];
    this.AMOUNT = dat[5];
    this.Price_Liter = dat[6];
    this.shipping_Address = dat[7];
    this.CompanyID = dat[8];
    this.Companyname = dat[9];
    this.TaxNumber = dat[10];

  }
}