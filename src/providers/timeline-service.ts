import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TimelineService {

  timeline: FirebaseListObservable<any>;

  constructor(
    private database: AngularFireDatabase
  ){
    this.timeline = database.list('/timeline');
  }

  getFullTimeline(){
   return this.timeline; 
  }

  createPost(post:any){
    this.timeline.push( post );
  }

}
