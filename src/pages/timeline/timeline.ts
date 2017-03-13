import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {

  timeline:any[] = [
    {
      img: 'assets/img/img1.jpg',
      text: 'Hola, esta',
      location: 'Mi casa',
      user: {
        name: 'Nicolas',
        avatar: 'assets/img/nicobytes.jpg'
      }
    },
    {
      img: 'assets/img/img2.jpg',
      text: 'Hola, esta',
      location: 'Chile',
      user: {
        name: 'Nicolas',
        avatar: 'assets/img/nicobytes.jpg'
      }
    }
  ];

  constructor(
    public navCtrl: NavController,
    public sheetCtrl: ActionSheetController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
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
            SocialSharing.share(message, image)
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
