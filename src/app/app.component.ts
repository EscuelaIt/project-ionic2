import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = 'HeroesPage';

  constructor(
    public platform: Platform,
    public fireAuth: AngularFireAuth,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.checkSession();
    });
  }

  private checkSession(){
    this.fireAuth.subscribe(session =>{
      this.rootPage = this.getPageInit(session);
    })
  }

  private getPageInit(session):any{
    if (session){
      return TabsPage;
    }
    return LoginPage;
  }
}
