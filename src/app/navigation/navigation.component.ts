import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  constructor(public modal: ModalService, public auth : AuthService) {
    this.auth.isAuthenticated$.subscribe(status => {
      this.isAuthenticated = status;
    })
  }

  ngOnInit(): void {}

  openModal($event: Event) {
    event?.preventDefault();
    this.modal.toggleModal('auth');
  }
}
