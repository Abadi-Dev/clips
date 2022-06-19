import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import IUser from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userCollection : AngularFirestoreCollection<IUser>;
  public isAuthenticated$ : Observable<boolean>

  constructor(private auth: AngularFireAuth,  private db: AngularFirestore) {
     this.userCollection = this.db.collection('users');
     auth.user.subscribe(console.log);
     this.isAuthenticated$ = auth.user.pipe(
       map((value) => {return !!value})
     )
   }


  public async createUser(userData: IUser) {

    if(!userData.password){
      throw new Error("password not provided");
    }

    const userCred = await this.auth.createUserWithEmailAndPassword(
        userData.email, userData.password
    );

      if(!userCred.user)
        throw new Error("User not Found!");


    await this.userCollection.doc(userCred.user.uid).set({
      name:  userData.name,
      email: userData.email,
      age: userData.age,
      phone: userData.phone
    })
    await userCred.user.updateProfile({
      displayName : userData.name
    })
  }
}
