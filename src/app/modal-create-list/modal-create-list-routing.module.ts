import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCreateListPage } from './modal-create-list.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCreateListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCreateListPageRoutingModule {}
