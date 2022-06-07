import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {}

  openModal($event: Event) {
    event?.preventDefault();
    this.modal.toggleModal('auth');
  }
}
