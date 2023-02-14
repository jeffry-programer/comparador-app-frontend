import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalShareListPageRoutingModule } from './modal-share-list-routing.module';

import { ModalShareListPage } from './modal-share-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalShareListPageRoutingModule
  ],
  declarations: []
})
export class ModalShareListPageModule {}
