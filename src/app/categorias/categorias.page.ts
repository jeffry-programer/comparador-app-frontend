import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(private generalService: GeneralService, private router: Router) { }

  categorias: any = [];
  showMsgLoadingCategories: boolean = true;

  ngOnInit() {
    this.consultarCategorias();
  }

  consultarCategorias(){
    const clase = this;
    this.generalService.allCategories().subscribe({
      next(data){
        clase.showMsgLoadingCategories = false;
        clase.categorias = data;
      },
      error(err){
        console.log(err)
      },
    });
  }

  goSubCategory(nameCategory: string){
    this.router.navigate(['subcategoria/'+nameCategory]);
  }

}
