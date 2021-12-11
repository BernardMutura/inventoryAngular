import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//Service to get items from an end point
export class UsersDataService {

  url='https://60742d38066e7e0017e793ca.mockapi.io/api/v1/add-item';

  constructor(private http: HttpClient) { }

  users(){
    return this.http.get(this.url)
  }

  saveUser(data: any){
    return this.http.post(this.url, data)
  }

}
