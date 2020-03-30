import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private navCtrl: NavController) {}

  goAnOtherPage() {
    this.navCtrl.navigateForward("living");
  }
  goAnOtherPage1() {
    this.navCtrl.navigateForward("kitchen");
  }
  goAnOtherPage2() {
    this.navCtrl.navigateForward("bedroom");
  }
  goAnOtherPage3() {
    this.navCtrl.navigateForward("dinningroom");
  }



}
