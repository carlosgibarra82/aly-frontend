import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  springUrl = environment.springURL;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getHello():Observable<any> {
    return this.httpClient.get<any>(this.springUrl + 'hello')
  }
}
