import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private  authService:  AuthService,private navCtrl: NavController, private  router:  Router) { }

  ngOnInit() {
  }
  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      this.router.navigateByUrl('');
    });
  }
  goAnOtherPage() {
    this.navCtrl.navigateForward('');
  }
  goAnOtherPage1() {
    this.navCtrl.navigateForward('register');
  }


}
