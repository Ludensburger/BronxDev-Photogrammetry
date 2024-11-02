import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from './model';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.page.html',
  styleUrls: ['./logon.page.scss'],
})
export class LogonPage implements OnInit {
  user = new User("example@static.net", "password1");
  usernameInp!: string;
  passwordInp!: string;
  isAlertOpenSuccess = false;
  isAlertOpenFailed = false;
  alertButtonFailed = [
    {
      text: 'OK',
      handler: () => {
      }
    }
  ];
  alertButtonSuccess = [
    {
      text: 'OK',
      handler: () => {
        this.navCtrl.navigateForward('/home')
      }
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.logUserCredentials();
  }

  logUserCredentials() {
    console.log('Example Username: ', this.user.getUsername());
    console.log('Example Password: ', this.user.getPassword());
  }

  onBackArrowClick() {
    this.navCtrl.navigateBack('/login');
  }

  onLoginClick(isOpen: boolean) {
    this.usernameInp = (document.getElementById('uName') as HTMLInputElement).value;
    this.passwordInp = (document.getElementById('pWord') as HTMLInputElement).value;

    if (this.usernameInp === this.user.getUsername() && this.passwordInp === this.user.getPassword()){
      this.isAlertOpenSuccess = isOpen;

    } else {
      this.isAlertOpenFailed = isOpen;

    }
  }
}
