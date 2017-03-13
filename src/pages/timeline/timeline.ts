import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';
import { FirebaseListObservable } from 'angularfire2';

import { TimelineService } from '../../providers/timeline-service';

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {

  timeline: FirebaseListObservable<any>;
  /*timeline:any[] = [
    {
      img: 'assets/img/img1.jpg',
      text: 'Hola, esta',
      location: 'Mi casa',
      favorite: true,
      user: {
        name: 'Nicolas',
        avatar: 'assets/img/nicobytes.jpg'
      }
    },
    {
      img: 'assets/img/img2.jpg',
      text: 'Hola, esta',
      location: 'Chile',
      favorite: false,
      user: {
        name: 'Nicolas',
        avatar: 'assets/img/nicobytes.jpg'
      }
    }
  ];*/

  constructor(
    public navCtrl: NavController,
    public sheetCtrl: ActionSheetController,
    public timelineService: TimelineService,
  ) {
    this.timeline = timelineService.getFullTimeline();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

  favorite( post ){
    post.favorite = !post.favorite;
  }

  showOptions( post ){
    let action = this.sheetCtrl.create({
      title: 'Options post',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Share',
          handler: () => {
            let message = post.text;
            let image = post.img;
            SocialSharing.share(message, 'test', image, 'https://news.ycombinator.com/')
            .catch(error=>{
              console.error(error)
            })
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    action.present( action );
  }

}
