import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { MyApp } from './app.component';

import { ActivityPage } from '../pages/activity/activity';
import { CameraPage } from '../pages/camera/camera';
import { FiltersPage } from '../pages/filters/filters';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { TimelinePage } from '../pages/timeline/timeline';

import { TimelineService } from '../providers/timeline-service';


const firebaseConfig = {
  apiKey: "AIzaSyC99HZB7tlvoLxB15FOvA0YpDAiqEKohNs",
  authDomain: "todosapp-edee7.firebaseapp.com",
  databaseURL: "https://todosapp-edee7.firebaseio.com",
  storageBucket: "todosapp-edee7.appspot.com",
  messagingSenderId: "294127527512"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    ActivityPage,
    CameraPage,
    FiltersPage,
    LoginPage,
    ProfilePage,
    RegisterPage,
    SearchPage,
    TabsPage,
    TimelinePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivityPage,
    CameraPage,
    FiltersPage,
    LoginPage,
    ProfilePage,
    RegisterPage,
    SearchPage,
    TabsPage,
    TimelinePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TimelineService
  ]
})
export class AppModule {}