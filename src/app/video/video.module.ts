import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ManageComponent,
    UploadComponent
  ],
  imports: [SharedModule,
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
