import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class StreamerService {
  constructor(private http: HttpClient) {
  }

  getStreamers() {
    return this.http.get("http://localhost:8000/api/streams");
  }

  getViewers(streamname: String) {
    return this.http.get("http://localhost:8000/api/streams/live/" + streamname);
  }
}
