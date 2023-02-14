import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompararListaPageRoutingModule } from './comparar-lista-routing.module';

import { CompararListaPage } from './comparar-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompararListaPageRoutingModule
  ],
  declarations: [CompararListaPage]
})
export class CompararListaPageModule {}
