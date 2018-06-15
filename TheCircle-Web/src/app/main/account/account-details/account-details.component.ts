import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  userImage = '../../../assets/img/userImage.png';
  // username = this.data.username;
  // slogan = this.data.slogan;
  // email = this.data.email;
  username = 'Thomas';
  slogan = 'Shrek is love, Shrek is life';
  email = 'giedeisfgt@webcamboy.nl';
  // editBtn = '../../../assets/img/editIcon.png';


  constructor(public dialogRef: MatDialogRef<AccountDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
