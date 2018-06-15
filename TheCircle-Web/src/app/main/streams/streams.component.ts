import { Component, OnInit } from '@angular/core';
import {Stream} from '../../_models/stream.model';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
  streamerName: 'Streamer';
  slogan: 'Shrek is love, Shrek is life, Giede is fgt';
  address: '../../../assets/img/video.jpg';

  streamArray: Stream[] = [
    {
      streamerName: 'Streamer',
      slogan: 'Shrek is love, Shrek is life, Giede is fgt',
      address: '../../../assets/img/video.jpg'
    },
    {
      streamerName: 'Streamer',
      slogan: 'Shrek is love, Shrek is life, Giede is fgt',
      address: '../../../assets/img/video.jpg'
    },
    {
      streamerName: 'Streamer',
      slogan: 'Shrek is love, Shrek is life, Giede is fgt',
      address: '../../../assets/img/video.jpg'
    },
    {
      streamerName: 'Streamer',
      slogan: 'Shrek is love, Shrek is life, Giede is fgt',
      address: '../../../assets/img/video.jpg'
    },
    {
      streamerName: 'Streamer',
      slogan: 'Shrek is love, Shrek is life, Giede is fgt',
      address: '../../../assets/img/video.jpg'
    },
    {
      streamerName: 'Streamer',
      slogan: 'Shrek is love, Shrek is life, Giede is fgt',
      address: '../../../assets/img/video.jpg'
    },
    {
      streamerName: 'Streamer',
      slogan: 'Shrek is love, Shrek is life, Giede is fgt',
      address: '../../../assets/img/video.jpg'
    },
    ];

  constructor() { }

  ngOnInit() {
  }

}
