import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-modal-create-list',
  templateUrl: './modal-create-list.page.html',
  styleUrls: ['./modal-create-list.page.scss'],
})
export class ModalCreateListPage implements OnInit {

  constructor(private modalController: ModalController, private generalService: GeneralService) { }

  showMsgLoading: boolean = false;
  showMsg: boolean = false;
  response: string = '';
  nameList: any;

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss({
      message: this.response
    });
  }

  createList(){
    this.showMsgLoading = true;
    const clase = this;
    const data = {
      'nameList' : this.nameList,
      'estado' : 1
    }
    this.generalService.addList(data).subscribe({
      next(data){
        clase.showMsgLoading = false;
        clase.showMsg = true; 
        clase.response = 'ok';       
      },
      error(err){
        console.log(err)
      },
    });
  }

}
