import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UsersAll } from '../Model/users';
import {Manager, ManagerAll} from 'src/app/Model/manager';
import {Saleoffice, SaleofficeAll} from 'src/app/Model/saleoffice'

@Injectable({
providedIn: 'root'
})
export class NetworkService {


private userURL = `https://localhost:44380/api/auth/user`;
private managerURL = `https://localhost:44380/api/auth/manager`;
private saleofficeURL = `https://localhost:44380/api/auth/Saleoffice`;

constructor(private httpClient: HttpClient) { }

getUsers(): Observable<UsersAll> {
return this.httpClient.get<UsersAll>(this.userURL);
}

getManger(): Observable<ManagerAll>{
    return this.httpClient.get<ManagerAll>(this.managerURL)
}

getSaleoffice(): Observable<SaleofficeAll>{
    return this.httpClient.get<SaleofficeAll>(this.saleofficeURL)
}




}