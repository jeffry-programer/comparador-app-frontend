import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GeneralService } from '../general.service';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';
import { ModalShareListPage } from '../modal-share-list/modal-share-list.page';

@Component({
  selector: 'app-detalle-lista',
  templateUrl: './detalle-lista.page.html',
  styleUrls: ['./detalle-lista.page.scss'],
})
export class DetalleListaPage implements OnInit {
  @ViewChild('popover') popover: any;

  constructor(private activatedRoute: ActivatedRoute, private location: Location, private generalService: GeneralService, private modalController: ModalController, private router: Router) { }

  listId: any;
  nameProd: any;
  colorMsg: string = 'dark';
  msg: string = '';
  titleList: string = '';
  prodsData: any = [];
  prods: any = [];
  prodsBuy: any = [];
  loadingMsg: boolean = false;
  showMsg: boolean = false;
  showMsgLoading: boolean = true;
  showItem: boolean = false;

  contProd: any = 0;
  contProdBuy: any = 0;

  isOpen = false;

  listOptios: any = ['Compartir','Comparar','Eliminar'];

  
  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  ngOnInit() {
    this.listId = this.activatedRoute.snapshot.paramMap.get('listId') as string;
    this.queryDetailList();
  }

  async openModal(prodId: any, quantityProd: any, priceProd: any, nameProd: any){
    const modal = await this.modalController.create({
      component: MyModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'prodId' : prodId,
        'quantityProd' : quantityProd,
        'priceProd' : priceProd,
        'nameProd' : nameProd
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    if(data.message !== ''){
      this.colorMsg = 'dark';
      this.msg = 'Actualizando datos...';
      this.showMsg = true;
      this.queryDetailList();
      const clase = this;
      setTimeout(function(){
        clase.colorMsg = 'success';
        clase.msg = 'Datos actualizados';
      }, 1000);
    } 
  }

  goBack(){
    this.location.back();
  }

  queryDetailList(){
    const data: any = {
      "listId" : this.listId
    }
    const clase = this;
    this.generalService.queryDetailList(data).subscribe({
      next(data){
        clase.prodsData = data;
        clase.prods.length = 0;
        clase.prodsBuy.length = 0;
        clase.showMsgLoading = false;
        clase.showItem = true;
        for (let i = 0; i < Object.keys(clase.prodsData).length; i++){
          if(clase.prodsData[i]['estado'] == 0){
            clase.prods[clase.contProd] = clase.prodsData[i];
            clase.contProd++;
          }else{
            clase.prodsBuy[clase.contProdBuy] = clase.prodsData[i];
            clase.contProdBuy++;
          }
        }
        clase.titleList = clase.prodsData[0]['nombreLista'];
      },
      error(err){
        console.log(err);
      }
    });
    this.contProd = 0;
    this.contProdBuy = 0;
  }

  addProdList(){
    this.showMsg = false;
    this.loadingMsg = true;
    const data: any = {
      "listId" : this.listId,
      "nameProd" : this.nameProd
    }
    const clase = this;
    this.generalService.addProdList(data).subscribe({
      next(data){
        clase.queryDetailList();
        setTimeout(function(){
          clase.colorMsg = 'success';
          clase.msg = 'Producto agregado exitosamente';
          clase.loadingMsg = false;
          clase.showMsg = true;
        }, 1000);
      },
      error(err){
        clase.colorMsg = 'danger';
        clase.msg = 'Error al agregar producto';
        clase.loadingMsg = false;
        clase.showMsg = true;
        console.log(err);
      }
    });
    this.nameProd = null;
  }

  //Change state ofo product
  changeStatus(status: any, prodListId: any){
    this.showMsg = false;
    this.loadingMsg = true;
    const clase = this;
    const data = {
      'status' : status,
      'prodListId' : prodListId
    }
    this.generalService.changeStatusProd(data).subscribe({
      next(data){
        clase.queryDetailList();
        setTimeout(function(){
          clase.colorMsg = 'success';
          clase.msg = 'Producto movido exitosamente';
          clase.loadingMsg = false;
          clase.showMsg = true;
        }, 1000);
      },
      error(err){
        console.log(err);
      }
    });
  }
  //Delete prod
  deleteProd(prodId: any){
    this.showMsg = false;
    this.loadingMsg = true;
    const data = {
      'prodListId' : prodId
    }
    const clase = this;
    this.generalService.deleteProdList(data).subscribe({
      next(data){
        clase.queryDetailList();
        setTimeout(function(){
          clase.colorMsg = 'success';
          clase.msg = 'Producto eliminado exitosamente';
          clase.loadingMsg = false;
          clase.showMsg = true;
        }, 1000);
      },
      error(err){
        console.log(err);
      }
    });
  }
  //Execute option of list
  optionList(option: string){
    switch (option) {
      case 'Compartir':
        this.shareList();
      break;
      case 'Comparar':
       this.compareList(); 
      break;
      default:
        this.deleteList(); 
      break;
    }
  }
  //Delete list
  deleteList(){
    const data = {
      'listId' : this.listId
    }
    const clase = this;
    this.generalService.deleteList(data).subscribe({
      next(data){
        clase.isOpen = false;
        clase.router.navigate(['Listas']);
      },
      error(err){
        console.log(err);
      }
    });
  }
  //Compare list
  compareList(){
    this.isOpen = false;
    this.router.navigate(['comparar-lista/'+this.listId]);
  }
  //Share list
  async shareList(){
    const modal = await this.modalController.create({
      component: ModalShareListPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'listId' : this.listId
      }
    });

    await modal.present();

  }
}
