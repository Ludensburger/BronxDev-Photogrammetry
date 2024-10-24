import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  returnHome() {
    this.navCtrl.navigateBack('/home');
  }
}
