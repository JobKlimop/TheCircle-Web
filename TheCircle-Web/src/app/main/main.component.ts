import { Component, OnInit } from '@angular/core';
import { EncryptionService} from '../_services/encryption.service';
import { ChatService } from '../_services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private encryptionService: EncryptionService, private router: Router) { }

  ngOnInit() {
  }

  // testClick() {
  //   const msg = 'testmessageGiedeIsFaggot';
  //   const signedMsg = this.encryptionService.sign(msg);
  //
  //   let valid = this.encryptionService.verify(signedMsg.msg, signedMsg.crt, signedMsg.signature)
  //   console.log(valid)
  // }
}
