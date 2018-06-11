import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  user = {
    "name": "Youri van Boeckholtz"
  }

  messages = [{
    "user": this.user.name,
    "text": "Hello all."
  },
  
  {
    "user": this.user.name,
    "text": "Welcome to my stream."
  }]

  // Track the current reply message.
  replyMessage = "";

  
  

  constructor() { }

  ngOnInit() {
  }

  
  reply(){
    // Add new message (reply).
    this.messages.push({
      "user": this.user.name,
      "text": this.replyMessage
    })

    // Empty out message field again.
    this.replyMessage = "";
  }
}