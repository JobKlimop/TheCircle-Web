import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  backgroundImage = '../../assets/img/bg1.png';
  logoLocation = '../../assets/img/logo.png';

  constructor() { }

  ngOnInit() {
  }

}
