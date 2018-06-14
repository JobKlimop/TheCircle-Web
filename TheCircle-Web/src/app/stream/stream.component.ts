import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
  public username: string;
  public quote: string;
  public viewers: string;

  constructor(private router: Router) {
    // Set some default user information.
    this.username = "Transparent person";
    this.quote = "The best streamer on the circle.";
    this.viewers = "21";
   }

  ngOnInit() {
  }

}
