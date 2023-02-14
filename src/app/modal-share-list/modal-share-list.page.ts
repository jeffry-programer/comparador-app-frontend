import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-modal-share-list',
  templateUrl: './modal-share-list.page.html',
  styleUrls: ['./modal-share-list.page.scss'],
})
export class ModalShareListPage implements OnInit {

  @Input() listId: any;

  constructor(private modalController: ModalController, private generalService: GeneralService) { }

  email: any;
  showMsgLoading: boolean = false;
  showMsg: boolean = false;

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

  shareList(){
    this.showMsgLoading = true;
    const data = {
      'email' : this.email,
      'listId' : this.listId
    }
    const clase = this;
    this.generalService.shareList(data).subscribe({
      next(data){
        clase.showMsgLoading = false;
        clase.showMsg = true;
        console.log(data)  
      },
      error(err){
        console.log(err)
      },
    });
  }
}
