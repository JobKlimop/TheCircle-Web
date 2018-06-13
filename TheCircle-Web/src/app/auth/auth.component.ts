import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css', './login/login.component.css']
})
export class AuthComponent implements OnInit {
  logoLocation = '../../assets/img/logo.png';

  constructor() { }

  ngOnInit() {
  }

}
