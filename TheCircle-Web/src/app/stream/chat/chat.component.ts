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
  message = "";
  messages = this.chatService.messages;
  

  constructor(private encryptionService: EncryptionService, private chatService: ChatService, private authService: AuthService) { 
    // This setUsername needs to be removed when authorization and routing is implemented.
    this.messages = chatService.messages;
  }

  ngOnInit() {
    this.messages.push({content: 'test message'})
    this.chatService.messagesChanged
    .subscribe((newMessages) => {
      this.messages = newMessages
    })

    // Bootleg way to submit with enter button, whoops.
    var input = document.getElementById("replybox");

    // Execute a function when the user releases a key on the keyboard.
    input.addEventListener("keyup", function(event) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.getElementById("submit").click();
      }
    });
  }

  

  
  send(){
    // Commented because sign doesn't work properly without the auth service.
    this.chatService.joinRoom('room-1')
    let message = this.encryptionService.sign(this.message)
    message.room = 'room-1'
    this.chatService.sendMessage(message);

    // Empty out message field again.
    this.message = "";
  }
}