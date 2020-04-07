import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router,private navCtrl: NavController) { }

  ngOnInit() {
  }
  register(form) {
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('');
    });
  }
  goAnOtherPage() {
    this.navCtrl.navigateForward('');
  }
}
