import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';

  isAlertOpenSuccess = false;
  alertButtons = [
    {
      text: 'OK',
      handler: () => {
        this.navCtrl.navigateBack('/login');
      }
    }
  ];

  constructor(private navCtrl: NavController, private authService: AuthService) { }

  ngOnInit() {
  }

  onBackArrowClick() {
    this.navCtrl.navigateBack('/login');
  }

  onSignupClick() {
    if (!this.name || !this.email || !this.password) {
      console.error('All fields are required');
      return;
    }

    this.authService.addUser({ name: this.name, email: this.email, password: this.password }).subscribe({
      next: () => {
        this.isAlertOpenSuccess = true;
      },
      error: (error) => {
        console.error('Signup failed', error);
      }
    });
  }
}
