import { Component, OnInit } from '@angular/core';
import { EncryptionService} from '../_services/encryption.service';
import { ChatService } from '../_services/chat.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private encryptionService: EncryptionService, private chatService: ChatService) { }

  ngOnInit() {
  }

  test() {
    const msg = 'testmessageGiedeIs';
    //this.chatService.sendMessage('room-1', msg)
  }
}
