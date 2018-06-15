import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../_models/user.model';

@Injectable()
export class AuthService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private url = environment.accountApiUrl;
  public loggedIn = false;
  public key: string;
  public crt: string;
  public token: string;
  public user: User;

  constructor(private http: HttpClient) {

  }

  public login(username: string, password: string) {
    return this.http.post(
      this.url + '/login',
      {'username' : username, 'password': password},
      {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        console.log(response.user.username);
        this.setSession(
          response.token,
          response.crt.cert,
          response.crt.private,
          response.user.username,
          response.user.slogan,
          response.user.email
        );
        this.loggedIn = true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    delete this.key;
    delete this.crt;
    delete this.token;
  }

  setSession(token, certificate, privateKey, username, slogan, email) {
    this.key = privateKey;
    this.token = token;
    this.crt = certificate;

    this.user = new User(username, slogan, email);
  }

  isAuthenticated() {
    if (this.token) {
      return this.loggedIn;
    } else {
      return false;
    }
  }
}
