import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { map, Observable, delay, filter } from 'rxjs';
import IUser from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<IUser>;
  public isAuthenticated$: Observable<boolean>;
  public isAuthenticatedWithDelay$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.userCollection = this.db.collection('users');
    this.isAuthenticated$ = auth.user.pipe(
      map((user) => {
        return !!user;
      })
    );
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(delay(1000));
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(console.log);
  }

  public async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('password not provided');
    }

    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );

    if (!userCred.user) throw new Error('User not Found!');

    await this.userCollection.doc(userCred.user.uid).set({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phone: userData.phone,
    });
    await userCred.user.updateProfile({
      displayName: userData.name,
    });
  }
  public async logout($event: Event) {
    $event.preventDefault();
    await this.auth.signOut();
    await this.router.navigateByUrl('/');
  }
}
