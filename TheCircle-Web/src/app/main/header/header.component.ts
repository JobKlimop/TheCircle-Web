import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AccountDetailsComponent} from '../account/account-details/account-details.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoLocation = '../../assets/img/logo.png';
  username = 'test';
  email = 'test@test.com';
  slogan = 'testSloganGiedeIsFaggot';

  constructor(private authService: AuthService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = '500px';
    dialogConfig.data = {username: this.username, email: this.email, slogan: this.slogan};

    let dialogRef = this.dialog.open(AccountDetailsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
