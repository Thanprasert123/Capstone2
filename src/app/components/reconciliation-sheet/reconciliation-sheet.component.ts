import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ViewFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-reconciliation-sheet',
  templateUrl: './reconciliation-sheet.component.html',
  styleUrls: ['./reconciliation-sheet.component.css']
})
export class ReconciliationSheetComponent implements OnInit {

  public userArray: any = [];
  //File upload function
  constructor(private http: HttpClient) {
    this.http.get('assets/mocData/Reconciliation Sheet (Monthly).csv', { responseType: 'text' }).subscribe(
      data => {
        let csvToRowArray = data.split("\n");
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(",");
          this.userArray.push(row);
        }
        console.log(this.userArray);
      }
    )
  }

  ngOnInit(): void {
  }

}
