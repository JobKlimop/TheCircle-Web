import { Component, OnInit } from '@angular/core';
import { EncryptionService} from '../../_services/encryption.service';
import { ChatService } from '../../_services/chat.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  // Track the current reply message.
  replyMessage = "";
  messages = this.chatService.messages;
  

  constructor(private encryptionService: EncryptionService, private chatService: ChatService, private authService: AuthService) { 
    // This setUsername needs to be removed when authorization and routing is implemented.
    this.chatService.setUsername("Testing account");
    this.authService.crt = ``;
    this.authService.key = ``;
    this.messages = chatService.messages;
  }

  ngOnInit() {
  }

  
  reply(){
    // Commented because sign doesn't work properly without the auth service.
    /*let message = this.encryptionService.sign(this.replyMessage)
    message.room = 'room-1'
    this.chatService.sendMessage(message);*/

    this.chatService.sendMessage(this.replyMessage);

    // Empty out message field again.
    this.replyMessage = "";
  }
}