import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimelinePage } from '../timeline/timeline'
import { SearchPage } from '../search/search'
import { ActivityPage } from '../activity/activity'
import { ProfilePage } from '../profile/profile'

/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = TimelinePage;
  tab2Root: any = SearchPage;
  tab3Root: any = ActivityPage;
  tab4Root: any = ProfilePage;

  constructor(public navCtrl: NavController) {

  }

}