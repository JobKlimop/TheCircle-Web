import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../../_services/chat.service';
import {Stream} from '../../_models/stream.model';


@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
  @Input() stream: Stream;
  public username: string;
  public quote: string;
  public viewers: string;

  constructor(private router: Router, private chatService: ChatService) {
    // Set some default user information.
    this.username = "Transparent person";
    this.quote = "The best streamer on the circle.";
    this.viewers = "0";
   }

  ngOnInit() {
    this.chatService.viewersChanged
    .subscribe((newViewers) => {
      this.viewers = newViewers;
    });
  }
}
