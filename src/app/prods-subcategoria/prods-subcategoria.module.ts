import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdsSubcategoriaPageRoutingModule } from './prods-subcategoria-routing.module';

import { ProdsSubcategoriaPage } from './prods-subcategoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdsSubcategoriaPageRoutingModule
  ],
  declarations: [ProdsSubcategoriaPage]
})
export class ProdsSubcategoriaPageModule {}
