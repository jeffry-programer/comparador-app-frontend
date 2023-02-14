import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasPageRoutingModule } from './listas-routing.module';

import { ListasPage } from './listas.page';

import { ModalCreateListPage } from '../modal-create-list/modal-create-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListasPageRoutingModule
  ],
  declarations: [ListasPage, ModalCreateListPage]
})
export class ListasPageModule {}
