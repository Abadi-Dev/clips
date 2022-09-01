import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { v4 as uuid } from "uuid";
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  isDragover = false;
  file: File | null = null;
  nextStep = false;
  //for alert component
  showAlert = false;
  alertMsg = 'Please wait while your clip is being uploaded.'
  alertColor = 'blue';
  inSubmission = false;
  percentage = 0;


  title = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(3),
    ],
    nonNullable: true
  })

  uploadForm = new FormGroup({
    title: this.title
  })


  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  storeFile($event: Event) {
    this.isDragover = false;
    this.file = ($event as DragEvent).dataTransfer?.files.item(0) ?? null

    if (!this.file || this.file.type !== 'video/mp4') {
      return
    }
    this.title.setValue(
      this.file.name.replace(/\.[^/.]+$/, '')
    )
    this.nextStep = true;
  }

  uploadFile() {
    this.showAlert = true;
    this.alertMsg = 'Please wait while your clip is being uploaded.'
    this.alertColor = 'blue';
    this.inSubmission = true;


    const clipFileName = uuid()
    const clipPath = `clips/${clipFileName}.mp4`;

    const task = this.storage.upload(clipPath, this.file);

    task.percentageChanges().subscribe(progress => {
      this.percentage = progress as number / 100;
    })

  }
}
