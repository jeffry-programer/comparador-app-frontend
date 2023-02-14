import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.page.html',
  styleUrls: ['./subcategoria.page.scss'],
})
export class SubcategoriaPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private generalService: GeneralService, private router: Router) { }

  nameCategory: string = '';
  subCategories: any;
  showMsgLoading: boolean = true;

  ngOnInit(){
    this.nameCategory = this.activatedRoute.snapshot.paramMap.get('nameCategory') as string;
    this.querySubCategories();
  }

  querySubCategories(){
    const data: any = {
      "nameCategory" : this.nameCategory
    }
    const clase = this;
    this.generalService.querySubCategories(data).subscribe({
      next(data){
        clase.showMsgLoading = false;
        clase.subCategories = data;
      },
      error(err){
        console.log(err);
      }
    });

  }

  goProdSubCategory(nameSubCategory: string){
    this.router.navigate(['prods-subcategoria/'+nameSubCategory]);
  }
}

