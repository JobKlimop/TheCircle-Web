import { Component, OnInit } from '@angular/core';
import { EncryptionService} from '../_services/encryption.service';
import { ChatService } from '../_services/chat.service';
import { Router } from '@angular/router';

// StreamerService uses the User model for their streamer list (since they're mutual).
import { StreamerService } from '../_services/streamer.service';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public streamers: User[] = [];
  public viewers = 0;
  
  constructor(private encryptionService: EncryptionService, private router: Router, private streamerService: StreamerService) { }

  ngOnInit() {
    this.streamerService.getStreamers()
      .subscribe((response: any) => {
        console.log(response.live);
        var tmp = response;
        var sList = [];
        for (var s in tmp.live) {
          sList.push(s);
        }
        for (var i = 0; i < sList.length; i++) {
          var streamerName = sList[i];
          var object = tmp.live[streamerName];
          var streamer = new User(object.publisher.stream, null, object.publisher.ip);
          this.streamers.push(streamer);
          this.streamerService.getViewers(streamerName)
            .subscribe(viewer => {
              var viewRes:any = viewer;
              this.viewers = viewRes.viewers;
            })
        }
        console.log(this.streamers);
      });
  }
}