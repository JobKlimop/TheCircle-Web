import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  //messages = ["Hi how are you","I am fine"];
  messages = [{
    "user": "Youri",
    "text": "Hello all.",
    "timestamp": "12:15"
  },
  
  {
    "user": "Youri",
    "text": "This stream is un-fricking believable.",
    "timestamp": "12:16"
  },

  {
    "user": "Youri",
    "text": "Yo... is er iemand? Haha. :'P",
    "timestamp": "02:21"
  }
]
  replyMessage = "";
  constructor() { }

  ngOnInit() {
  }

  reply(){
    this.messages.push({
      "user": "You",
      "text":this.replyMessage,
      "timestamp": "TIME!"
    })
    this.replyMessage = "";
  }

  
}