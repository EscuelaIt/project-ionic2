import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2';

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public fireAuth: AngularFireAuth,
    public fb: FormBuilder,
  ) {
    this.loginForm = this.makeLoginForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin( event: Event ){
    event.preventDefault();
    let load = this.loadCtrl.create();
    load.present( load );
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.fireAuth.login({
      email: email,
      password: password
    })
    .then(user =>{
      load.dismiss();
      this.navCtrl.setRoot( TabsPage );
    })
    .catch(error =>{
      console.log( error );
      load.dismiss();
    })
  }

  goToRegisterPage(){
    this.navCtrl.push( RegisterPage );
  }

  private makeLoginForm(){
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
