import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/users';
import { NetworkService } from 'src/app/Service/network.service';



@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {
userAll : User[] | undefined;



constructor(private networkService: NetworkService) { }

    UserAll: User[] | undefined;
    CountUser : number | undefined;
    UserID: User[] | undefined;
    UserName: User[] | undefined;



ngOnInit(): void {
this.feedUsers();
}
feedUsers()
{
this.networkService.getUsers().subscribe(

    data => {
    this.userAll = data.result;
    this.CountUser = this.userAll.length;
    this.UserID = data.result;
    this.UserName = data.result.sort();

   // alert(JSON.stringify(this.userAll));
},
error => {
//alert("Can't not get users data");
});
}
}