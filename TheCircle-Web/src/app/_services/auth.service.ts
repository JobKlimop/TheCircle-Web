import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private url = environment.accountApiUrl;
  public loggedIn = false;

  constructor(private http: HttpClient) {

  }

  public login(username: string, password: string) {
    return this.http.post(
      this.url + '/login',
      {'username' : username, 'password': password},
      {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log(response.crt.private);
        this.setSession(response, username);
        this.loggedIn = true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {

  }

  setSession(token, username) {
    localStorage.setItem('token', JSON.stringify(token.token));
  }
}
