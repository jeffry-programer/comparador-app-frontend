import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCreateListPageRoutingModule } from './modal-create-list-routing.module';

import { ModalCreateListPage } from './modal-create-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCreateListPageRoutingModule
  ],
  declarations: []
})
export class ModalCreateListPageModule {}
