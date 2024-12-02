import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { User } from './model';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.page.html',
  styleUrls: ['./logon.page.scss'],
})
export class LogonPage implements OnInit {
  user = new User("example@static.net", "password1");
  usernameInp: string = '';
  passwordInp: string = '';

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

  constructor(private navCtrl: NavController, private authService: AuthService) { }

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
    console.log(`Attempting to log in with email: ${this.usernameInp}`);
    this.authService.loginUser({ email: this.usernameInp, password: this.passwordInp }).subscribe({
      next: (response: any) => {
        if (response.message === 'Login successful') {
          console.log('Login successful');
          this.isAlertOpenSuccess = isOpen;
        } else {
          console.log('Login failed');
          this.isAlertOpenFailed = isOpen;
        }
      },
      error: (error) => {
        console.error('Login failed', error);
        this.isAlertOpenFailed = isOpen;
      }
    });
  }
}
