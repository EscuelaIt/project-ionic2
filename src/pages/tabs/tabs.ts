import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TimelinePage } from '../timeline/timeline';
import { SearchPage } from '../search/search';
import { ActivityPage } from '../activity/activity';
import { ProfilePage } from '../profile/profile';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = TimelinePage;
  tab2Root: any = SearchPage;
  tab3Root: any = ActivityPage;
  tab4Root: any = ProfilePage;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  showCameraModal(){
    let modal = this.modalCtrl.create( CameraPage );
    modal.present();
  }

}