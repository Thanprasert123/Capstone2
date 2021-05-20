import { Component, OnInit } from '@angular/core';
import {Manager} from 'src/app/Model/manager';
import {NetworkService} from 'src/app/Service/network.service';
import {User, UsersAll} from 'src/app/Model/users';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  ManagerAll : Manager[] | undefined;
  userAll : User[] | undefined;

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.Manager();
    this.User();
  }
  User() {
      this.networkService.getUsers().subscribe(
        Data=>{
            this.userAll = Data.result;
            alert(JSON.stringify(this.userAll))
        },
        error=>{
          alert("can't not get User data")
        }
        
      )
  }

  Manager(){
    this.networkService.getManger().subscribe(

        data=> {
          this.ManagerAll = data.result;
        

        alert(JSON.stringify(this.ManagerAll));

  },
  error=>{
    alert("Can't not get manager data")
  });
}
}

  
       
  

    
