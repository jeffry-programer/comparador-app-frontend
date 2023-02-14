import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleListaPageRoutingModule } from './detalle-lista-routing.module';

import { DetalleListaPage } from './detalle-lista.page';

import { MyModalPage } from '../my-modal/my-modal.page';

import { ModalShareListPage } from '../modal-share-list/modal-share-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleListaPageRoutingModule,
  ],
  declarations: [DetalleListaPage, MyModalPage, ModalShareListPage],
})
export class DetalleListaPageModule {}
