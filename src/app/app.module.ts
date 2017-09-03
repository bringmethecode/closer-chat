import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAQHGVbPhNhS7Lkt1oL7WIBd2Pjj1_Im6U",
  authDomain: "closerchat-c826a.firebaseapp.com",
  databaseURL: "https://closerchat-c826a.firebaseio.com",
  projectId: "closerchat-c826a",
  storageBucket: "closerchat-c826a.appspot.com",
  messagingSenderId: "748559953872"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

