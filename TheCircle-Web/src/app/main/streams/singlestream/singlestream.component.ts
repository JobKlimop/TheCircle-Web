import {Component, Input, OnInit} from '@angular/core';
import {Stream} from '../../../_models/stream.model';
import {Observable} from 'rxjs';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-singlestream',
  templateUrl: './singlestream.component.html',
  styleUrls: ['./singlestream.component.css']
})
export class SinglestreamComponent implements OnInit {
  @Input() stream: Stream;
  subscriberArray = [];
  ip = '../../../../assets/img/video.jpg';
  viewerIcon = '../../../../assets/img/viewer-icon.png';

  navigationExtras: NavigationExtras = {
    queryParams: {'username': this.stream.publisher.stream},
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.subscriberArray = [];

    // @ts-ignore
    for (const s in this.stream.subscribers) {
      this.subscriberArray.push(this.stream.subscribers[s]);
    }
  }

  toStream() {
    this.router.navigateByUrl('/stream/' + this.stream.publisher.stream, this.navigationExtras);
  }
}
