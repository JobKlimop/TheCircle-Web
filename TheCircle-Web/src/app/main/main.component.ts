import { Component, OnInit } from '@angular/core';
import {StreamerService} from "../services/streamer.service";
import {Streamer} from "../shared/models/streamer";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public streamers: Streamer[] = [];
  public viewers = 0;

  constructor(private streamerService: StreamerService) { }

  ngOnInit() {
    this.streamerService.getStreamers()
      .subscribe(response => {
        console.log(response.live);
        var tmp = response;
        var sList = [];
        for (var s in tmp.live) {
          sList.push(s);
        }
        for (var i = 0; i < sList.length; i++) {
          var streamerName = sList[i];
          var object = tmp.live[streamerName];
          var streamer = new Streamer(object.publisher.stream, null, null, object.publisher.ip);
          this.streamers.push(streamer);
          this.streamerService.getViewers(streamerName)
            .subscribe(viewer => {
              var viewRes = viewer;
              this.viewers = viewRes.viewers;
            })
        }
        console.log(this.streamers);
      });
  }

}
