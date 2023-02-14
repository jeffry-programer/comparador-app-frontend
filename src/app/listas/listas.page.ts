import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GeneralService } from '../general.service';
import { ModalCreateListPage } from '../modal-create-list/modal-create-list.page';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {

  constructor(private generalService: GeneralService, private router: Router, private modalController: ModalController) { }

  list: any = [];
  msg: string = 'Cargando...';
  colorMsg: string = 'dark';
  showMsg: boolean = true;

  ngOnInit() {
    this.consultarListas();
  }

  consultarListas(){
    const clase = this;
    this.generalService.queryList().subscribe({
      next(data){
        clase.showMsg = false;
        clase.list = data;
      },
      error(err){
        console.log(err)
      },
    });
  }

  goDetaiList(listId:any){
    this.router.navigate(['detalle-lista/'+listId]);
  }

  async createList(){
    const modal = await this.modalController.create({
      component: ModalCreateListPage,
      cssClass: 'my-custom-class',
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    if(data != ''){
      this.msg = 'Actualizando datos...';
      this.showMsg = true;
      this.consultarListas();
      const clase = this;
      setTimeout(function(){
        clase.colorMsg = 'success';
        clase.msg = 'Datos actualizados';
      },1000);
    }
  }    
}
