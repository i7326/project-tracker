// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';




@Injectable()
export class AuthService {
  user: BehaviorSubject<User> = new BehaviorSubject(null)

  /**private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;**///
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {

  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.afAuth.auth.signInWithRedirect(provider)
      .then(credential => {
        console.log(credential)
      })
  }
  logout() {
    this.afAuth.auth.signOut()
  }

/**
  get authenticated(): boolean {
    this.user = this._firebaseAuth.authState
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
          console.log(error);
        }
      });
    //console.log(this.userDetails);
    //console.log(firebase.auth().currentUser);
    return this.userDetails !== null;
  } **/


}
