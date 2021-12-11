import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PostService {

  json: any;

  // private url = 'http://localhost:3000/items';

  private url = 'https://60742d38066e7e0017e793ca.mockapi.io/api/v1/add-item/';

  constructor( private httpClient: HttpClient ) { }

  public getPosts(): Observable<any>{
    return this.httpClient.get(this.url)
  }

  public getDetails(id: number): Observable<any>{
    return this.httpClient.get(this.url+id)
  }

}
