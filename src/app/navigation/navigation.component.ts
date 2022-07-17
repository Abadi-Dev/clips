import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(public modal: ModalService, public auth: AuthService) {}

  ngOnInit(): void {}

  openModal($event?: Event) {
    if (event) {
      event.preventDefault();
    }
    event?.preventDefault();
    this.modal.toggleModal('auth');
  }
}
