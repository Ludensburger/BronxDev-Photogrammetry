import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  isAlertOpenSuccess = false;
  alertButtons = [
    {
      text: 'OK',
      handler: () => {
        this.navCtrl.navigateBack('/login');
      }
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onBackArrowClick() {
    this.navCtrl.navigateBack('/login');
  }

  myClick(isOpen: boolean) {
    this.isAlertOpenSuccess = isOpen;
  }
}
