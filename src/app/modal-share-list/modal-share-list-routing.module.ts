import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalShareListPage } from './modal-share-list.page';

const routes: Routes = [
  {
    path: '',
    component: ModalShareListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalShareListPageRoutingModule {}
