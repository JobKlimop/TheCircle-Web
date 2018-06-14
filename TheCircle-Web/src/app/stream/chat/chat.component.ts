import { Component, OnInit } from '@angular/core';
import { EncryptionService} from '../../_services/encryption.service';
import { ChatService } from '../../_services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  // Track the current reply message.
  replyMessage = "";

  constructor(private encryptionService: EncryptionService, private chatService: ChatService) { }

  ngOnInit() {
  }

  
  reply(){
    // This setUsername needs to be removed when authorization and routing is implemented.
    this.chatService.setUsername("Testing account");
    this.chatService.sendMessage('room-1', this.replyMessage);

    // Empty out message field again.
    this.replyMessage = "";
  }
}