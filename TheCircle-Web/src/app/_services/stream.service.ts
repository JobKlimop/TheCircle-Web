import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Stream} from '../_models/stream.model';
import {environment} from '../../environments/environment';
import {User} from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private stream: Stream;
  private streamArray = [];
  private videoUrl = environment.videoApiUrl;
  private accountUrl = environment.accountApiUrl;

  constructor(private http: HttpClient) {

  }

  getAllStreams(): Promise<Stream[]> {
    return this.http.get(
      this.videoUrl + '/streams',
      {headers: this.headers})
      .toPromise()
      .then((response: any) => {

        this.streamArray = [];
        for (let s in response.live) {
          this.streamArray.push(response.live[s]);
        }
        return this.streamArray;
      });
  }

  getUser(username: string): Promise<any> {
    return this.http.get(
      this.accountUrl + '/user/' + username,
      {headers: this.headers})
      .toPromise()
      .then((response) => {
        return response;
      });

  }
}
