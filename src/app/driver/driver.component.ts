import { Component, OnInit } from '@angular/core';
import {NetworkService} from 'src/app/Service/network.service'
import {User} from 'src/app/Model/users'




@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private networkService: NetworkService) { }


  UserAll: User[] | undefined;
  CountUser : number | undefined;
  UserID: User[] | undefined;
  UserName: User[] | undefined;


  ngOnInit(): void {
    this.DriverJA();
  }

  DriverJA(){
    this.networkService.getUsers().subscribe(
        data => {
          this.UserAll = data.result;
          this.CountUser = this.UserAll.length;
          this.UserID = data.result;
          this.UserName = data.result.sort();

          //alert(JSON.stringify(this.UserAll));
},
          error => {
         // alert("Can't not get users data");
        }


    )
  }

}
