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

  goToStream() {
    this.router.navigateByUrl('/stream')
  }
}
