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
  emailInp: string = '';
  passwordInp: string = '';

  isAlertOpenFailed = false;
  alertButtonFailed = [
    {
      text: 'OK',
      handler: () => {
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
    const trimmedEmail = this.emailInp.trim();
    const trimmedPassword = this.passwordInp.trim();
    
    console.log(`Attempting to log in with email: ${trimmedEmail}`);
    
    this.authService.loginUser({ email: trimmedEmail, password: trimmedPassword }).subscribe({
      next: (response: any) => {
        console.log('Login response:', response);
        if (response.message === 'Login successful') {
          console.log('Login successful');
          this.isAlertOpenFailed = false; // Ensure the failed alert is not open
          this.navCtrl.navigateForward('/home');
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
