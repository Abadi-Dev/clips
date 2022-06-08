import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
// import { ModalService } from '../services/modal.service';

@NgModule({
  declarations: [ModalComponent, TabsContainerComponent],
  imports: [CommonModule],
  exports: [ModalComponent],
  // providers: [ModalService],
})
export class SharedModule {}
