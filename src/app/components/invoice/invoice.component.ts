import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  public userArray: Array<Invoice> = [];
  public ip_invoice_id: Array<any> = [];
  public i_number: string = '';
  public data: any;


  constructor(private http: HttpClient) {
    this.http.get('assets/mocData/Invoice.csv', { responseType: 'text' }).subscribe(
      data => {
        let csvToRowArray = data.split("\n");
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(",");
          this.userArray.push(new Invoice(row));
          this.ip_invoice_id.push(row[0])
        }
        this.i_number = this.ip_invoice_id[0]
        this.data = this.userArray[0]
        console.log(this.userArray);
        // console.log(this.ip_order_id)
      }
    )
  }

  selectINo() {
    let i = this.ip_invoice_id.indexOf(this.i_number)
    this.data = this.userArray[i]
    console.log(i)
  }

  ngOnInit(): void {
  }

}
class Invoice {
  PO_NUMBER: string | undefined;
  PaymentNO: string | undefined;
  DATE: string | undefined;
  PARTOL_TYPE: string | undefined;
  Q_ty: string | undefined;
  AMOUNT: string | undefined;
  Price_Liter: string | undefined;
  shippingAddress: string | undefined;
  CompanyID: string | undefined;
  Companyname: string | undefined;
  TaxNumber: string | undefined;
  InvoiceNumber: string | undefined;
  FillingTime: string | undefined;
  Vat_7_inclusive: string | undefined;
  GrandTotal: string | undefined;
  CompanyName: string | undefined;
  Address: string | undefined;

  constructor(dat: Array<any>) {
    this.PO_NUMBER = dat[0];
    this.PaymentNO = dat[1];
    this.DATE = dat[2];
    this.PARTOL_TYPE = dat[3];
    this.Q_ty = dat[4];
    this.AMOUNT = dat[5];
    this.Price_Liter = dat[6];
    this.shippingAddress = dat[7];
    this.CompanyID = dat[8];
    this.Companyname = dat[9];
    this.TaxNumber = dat[10];
    this.InvoiceNumber = dat[11];
    this.FillingTime = dat[12];
    this.Vat_7_inclusive = dat[13];
    this.GrandTotal = dat[14];
    this.CompanyName = dat[15];
    this.Address = dat.slice(16, 20).join(',');
  }
}