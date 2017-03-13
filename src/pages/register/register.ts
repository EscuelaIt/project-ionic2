import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  registerForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    public fireAuth: AngularFireAuth,
    public loadCtrl: LoadingController,
    public fb: FormBuilder,
  ) {
    this.registerForm = this.makeRegisterForm();
  }

  doRegister(){
    let load = this.loadCtrl.create({
      dismissOnPageChange: true
    });
    load.present( load );
    this.fireAuth.createUser({
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    })
    .catch(error=>{
      console.log(error);
      load.dismiss();
    });
  }

  private makeRegisterForm(){
    return this.fb.group({
      user: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

}
