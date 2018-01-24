import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(arr:any) {
    const headers = new Headers();
    return this.http.post('' ,{
        headers: headers
    })
        .map((response: Response) => response.json());
  }
}




