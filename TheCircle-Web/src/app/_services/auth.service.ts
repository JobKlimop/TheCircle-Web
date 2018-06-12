import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private url = environment.accountApiUrl;
  public loggedIn = false;
  public key: string;
  public crt: string;
  public token: string;

  constructor(private http: HttpClient) {

  }

  public login(username: string, password: string) {
    return this.http.post(
      this.url + '/login',
      {'username' : username, 'password': password},
      {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        this.setSession(response.token, response.crt.cert, response.crt.private);
        this.loggedIn = true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {

  }

  setSession(token, certificate, privateKey) {
    this.key = privateKey;
    this.token = token;
    this.crt = certificate;
  }

  isAuthenticated() {
    if (this.token) {
      return this.loggedIn;
    } else {
      return false;
    }
  }
}
