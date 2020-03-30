import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-dinningroom',
  templateUrl: './dinningroom.page.html',
  styleUrls: ['./dinningroom.page.scss'],
})
export class DinningroomPage  {
  constructor(private navCtrl: NavController) {}
  goAnOtherPage() {
    this.navCtrl.navigateForward("");
  }


}
