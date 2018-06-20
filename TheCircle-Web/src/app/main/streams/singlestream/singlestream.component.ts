import {Component, Input, OnInit} from '@angular/core';
import {Stream} from '../../../_models/stream.model';
import {Observable} from 'rxjs';
import {NavigationExtras, Router} from '@angular/router';
import {StreamService} from "../../../_services/stream.service";

@Component({
  selector: 'app-singlestream',
  templateUrl: './singlestream.component.html',
  styleUrls: ['./singlestream.component.css']
})
export class SinglestreamComponent implements OnInit {
  @Input() stream: any;
  subscriberArray = [];
  ip = '../../../../assets/img/video.jpg';
  viewerIcon = '../../../../assets/img/viewer-icon.png';

  // navigationExtras: NavigationExtras = {
  //   queryParams: {'username': this.stream.publisher.stream},
  // };

  constructor(private router: Router, private streamService: StreamService) { }

  ngOnInit() {
    this.subscriberArray = [];

    // @ts-ignore
    for (const s in this.stream.subscribers) {
      this.subscriberArray.push(this.stream.subscribers[s]);
    }
  }

  toStream() {
    this.streamService.setStreamer(this.stream.publisher.stream);
    this.router.navigateByUrl('/stream/' + this.stream.publisher.stream);
  }
}
