import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { TimelineService } from '../../providers/timeline-service';

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html'
})
export class FiltersPage {

  photo: any = {};
  filterSelected: any = {};
  filters: any[] = [
    {
      name: 'Normal',
      class: 'none'
    },
    {
      name: 'Sepia',
      class: 'sepia'
    },
    {
      name: 'Sature',
      class: 'sature'
    },
    {
      name: 'Hue-rotate',
      class: 'hue-rotate'
    },
    {
      name: 'Grayscale',
      class: 'grayscale'
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public timelineService: TimelineService,
  ) {}

  changeFilterSelected( filter ){
    this.filterSelected = filter;
  }

  ionViewDidLoad() {
    this.photo = this.navParams.get('photo');
  }

  savePhoto(){
    let post = {
      img: this.photo.img,
      text: 'Hola, esta',
      location: 'Chile',
      favorite: false,
      user: {
        name: 'Nicolas',
        avatar: 'assets/img/nicobytes.jpg',
      }
    };
    this.timelineService.createPost( post );
    this.navCtrl.setRoot( TabsPage );
  }

}
