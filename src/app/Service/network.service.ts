import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UsersAll } from '../Model/users';

@Injectable({
providedIn: 'root'
})
export class NetworkService {

private userURL = `https://localhost:44380/api/auth/user`;

constructor(private httpClient: HttpClient) { }

getUsers(): Observable<UsersAll> {
return this.httpClient.get<UsersAll>(this.userURL);
}
}