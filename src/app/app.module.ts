import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './user/user.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from './shared/shared.module';
import {AngularFireModule} from "@angular/fire/compat"
import { environment } from 'src/environments/environment';
import {AngularFireAuthModule} from '@angular/fire/compat/auth/'
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, SharedModule, AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule, AngularFirestoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
