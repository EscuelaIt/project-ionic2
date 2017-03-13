import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { FiltersPage } from '../filters/filters';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  photoSelected: any = {};

  photos:any[] = [
    {
      name: '1',
      img: 'assets/img/img1.jpg'
    },
    {
      name: '1',
      img: 'assets/img/img2.jpg'
    },
    {
      name: '1',
      img: 'assets/img/img3.jpg'
    },
    {
      name: '1',
      img: 'assets/img/img4.jpg'
    },
    {
      name: '1',
      img: 'assets/img/img5.jpg'
    },
    {
      name: '1',
      img: 'assets/img/img6.jpg'
    }
  ];

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
    this.photoSelected = this.photos[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

  changePhotoSelected( photo ){
    this.photoSelected = photo;
  }

  goToFiltersPage(){
    this.navCtrl.push( FiltersPage, {
      photo: this.photoSelected
    });
  }

}
