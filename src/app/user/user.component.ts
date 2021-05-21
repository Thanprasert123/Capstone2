import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/Model/users';
import {NetworkService} from 'src/app/Service/network.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    userAll : User[] | undefined;
    CountUser : number | undefined;
    UserID: User[] | undefined;
    UserName: User[] | undefined;

    constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.User();
  }

  User(){
    this.networkService.getUsers().subscribe(

      data => {
      this.userAll = data.result;
      this.CountUser = this.userAll.length;
      this.UserID = data.result;
      this.UserName = data.result.sort();
  
      alert(JSON.stringify(this.userAll));
  },
  error => {
  alert("Can't not get users data");
  });
  }
  }