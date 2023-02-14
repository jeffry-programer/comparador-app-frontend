import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompararListaPage } from './comparar-lista.page';

const routes: Routes = [
  {
    path: '',
    component: CompararListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompararListaPageRoutingModule {}
