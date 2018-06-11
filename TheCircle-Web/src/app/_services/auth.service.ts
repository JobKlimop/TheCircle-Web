import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  //TODO ADD URL TO API
  private url = 1;


  constructor(private http: HttpClient) {

  }

  public login(username: string, password: string) {
    return this.http.post(
      this.url + '/login',
      {'username' : username, 'password': password})
      .toPromise()
      .then((response) => {

      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {

  }
}
