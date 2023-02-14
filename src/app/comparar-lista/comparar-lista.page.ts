import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-comparar-lista',
  templateUrl: './comparar-lista.page.html',
  styleUrls: ['./comparar-lista.page.scss'],
})
export class CompararListaPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private generalService: GeneralService) { }

  listId: any;
  showData: boolean = false;

  ngOnInit() {
    this.listId = this.activatedRoute.snapshot.paramMap.get('listId') as string;
    this.queryDataToCompare();
  }

  queryDataToCompare(){
    const data = {
      'listId' : this.listId
    }
    this.generalService.queryDataToCompare(data).subscribe({
      next(data){
        console.log(data);
      },
      error(err){
        console.log(err);
      }
    });
  }

}
