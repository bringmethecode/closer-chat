import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: Observable<firebase.User>
  name: string = ''
  items: FirebaseListObservable<any[]>
  session: any
  sessionID: any
  msgVal: string = ''
  itemKey: any

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState
  }
  
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then( 
      credential => {
        this.name = credential.user.displayName
        this.session = credential.user
        this.sessionID = credential.user.uid
     })
  }

  logout() {
    this.afAuth.auth.signOut().then( _ => {
      this.session = null,
      this.sessionID = null
      })
  }

  Send(msg: string, sessionid: any) {
    this.items.push({ message: msg, sessionid: this.session.uid })
    this.msgVal = ''
  }
  
  isUser(item: any, sessionID: any) {
    if ( sessionID ) {
      return item.sessionid == sessionID
    }
    else { 
      return false;
    }
  }

  deleteMsg(item: any, key: any) {
    this.items.remove(key).then( _ => console.log("message deleted!"))
  }

  getRandomClass() {
    var rand = ['r', 'b', 'g'] ;
    return rand[Math.floor(Math.random() * rand.length)]
  };

}