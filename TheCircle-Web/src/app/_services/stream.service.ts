import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Stream} from '../_models/stream.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private stream: Stream;
  private streamArray = [];
  private url = environment.videoDataApiUrl;
  private streamer: string;

  constructor(private http: HttpClient) {

  }

  getAllStreams(): Promise<Stream[]> {
    return this.http.get(
      this.url + '/streams',
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

  public setStreamer(streamer: string) {
    this.streamer = streamer;
  }

  public getStreamer() {
    return this.streamer;
  }
}
