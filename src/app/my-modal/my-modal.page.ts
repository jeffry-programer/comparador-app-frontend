import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {

  @Input() prodId: any;
  @Input() quantityProd: any;
  @Input() priceProd: any;
  @Input() nameProd: any;

  showMsgSuccess: boolean = false;
  response: string = '';
  showMsgLoading: boolean = false;

  constructor(private modalController: ModalController, private generalService: GeneralService) { }

  ngOnInit() {
    if(this.priceProd == 0) this.priceProd = '';
  }

  closeModal(){
    this.modalController.dismiss({
      message: this.response
    });
  }

  editProd(){
    this.showMsgLoading = true;
    if(this.quantityProd == '' && this.priceProd == ''){
      console.log('datos invalidos')
    }else{
      if(this.quantityProd == '') this.quantityProd = 0;
      if(this.priceProd == '') this.priceProd = 0;
      const data = {
        'prodListId' : this.prodId,
        'quantityProd' : this.quantityProd,
        'priceProd' : this.priceProd,
      }
      const clase = this;
      this.generalService.editProdList(data).subscribe({
        next(data){
          clase.showMsgLoading = false;
          clase.showMsgSuccess = true;
          clase.response = 'ok';
        },
        error(err){
          console.log(err);
        }
      });
    }
  }
}
