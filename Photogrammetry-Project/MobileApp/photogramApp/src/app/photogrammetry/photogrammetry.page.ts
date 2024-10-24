import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-photogrammetry',
  templateUrl: './photogrammetry.page.html',
  styleUrls: ['./photogrammetry.page.scss'],
})
export class PhotogrammetryPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  returnHome() {
    this.navCtrl.navigateBack('/home');
  }
}
