import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProdService } from '../prod-service.service';

@Component({
  selector: 'app-prods-subcategoria',
  templateUrl: './prods-subcategoria.page.html',
  styleUrls: ['./prods-subcategoria.page.scss'],
})
export class ProdsSubcategoriaPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private location: Location, private router: Router, private prodService: ProdService) { }

  nameSubCategory: string = '';
  public prods: any = [];
  public msg: string = 'Cargando...';
  public showMsg: boolean = true;

  ngOnInit() {
    this.nameSubCategory = this.activatedRoute.snapshot.paramMap.get('nameSubCategory') as string;
    this.queryProdSubCategory();
  }

  queryProdSubCategory(){
    const clase = this;
    const data = {
      "nameSubCategory" : this.nameSubCategory
    }
    this.prodService.queryProdSubCategory(data).subscribe({
      next(data){
        clase.showMsg = false;
        clase.prods = data;
      },
      error(err){
        console.log(err)
      },
    });
  }

  goBack(){
    this.location.back();
  }

  goDetailProd(nameProd: string){
    this.router.navigate(['detalle-producto/'+nameProd]);
  }

}
