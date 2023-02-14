import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdsSubcategoriaPage } from './prods-subcategoria.page';

const routes: Routes = [
  {
    path: '',
    component: ProdsSubcategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdsSubcategoriaPageRoutingModule {}
