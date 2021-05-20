import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UsersAll } from '../Model/users';
import {Manager, ManagerAll} from 'src/app/Model/manager'

@Injectable({
providedIn: 'root'
})
export class NetworkService {

private userURL = `https://localhost:44380/api/auth/user`;
private managerURL = `https://localhost:44380/api/auth/manager`;

constructor(private httpClient: HttpClient) { }

getUsers(): Observable<UsersAll> {
return this.httpClient.get<UsersAll>(this.userURL);
}

getManger(): Observable<ManagerAll>{
    return this.httpClient.get<ManagerAll>(this.managerURL)
}



}