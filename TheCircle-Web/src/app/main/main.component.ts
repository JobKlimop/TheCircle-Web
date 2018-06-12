import { Component, OnInit } from '@angular/core';
import {EncryptionService} from '../_services/encryption.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private encryptionService: EncryptionService) { }

  ngOnInit() {
  }

  testClick() {
    const msg = 'testmessageGiedeIsFaggot';
    const signedMsg = this.encryptionService.sign(msg);
    console.log(signedMsg);
  }
}
