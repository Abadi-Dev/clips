import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

interface IModals {
  id: String;
  visible: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModals[] = [];
  constructor() {}

  register(id: String) {
    this.modals.push({ id, visible: false });
  }

  unregister(id: String) {}

  isModalOpen(id: String): boolean {
    return !!this.modals.find((element) => element.id === id)?.visible;
    // alternative solution : return Boolean(this.modals.find((element) => element.id === id)?.visible);
  }
  toggleModal(id: String): void {
    const modal = this.modals.find((element) => element.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
    // this.visible = !this.visible;
  }
}
