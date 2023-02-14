import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProdService } from '../prod-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private prodService: ProdService, private location: Location, private router: Router) { }

  nameProd: string = "";
  arrayProd: any = [];
  showMsgLoadingDetailProd: boolean = true;
  showDescription: boolean = false;
  prods: any = [];
  otherPrice: any = [];

  ngOnInit() {
    this.nameProd = this.activatedRoute.snapshot.paramMap.get('nameProd') as string;
    this.queryDetailProd();
    this.OtherPrice();
    this.prodSugerations();
  }

  queryDetailProd(){
    const prod: any = {
      "nameProd" : this.nameProd
    }
    const clase = this;
    this.prodService.queryDetailProd(prod).subscribe({
      next(data){
        clase.arrayProd = data;
        clase.showMsgLoadingDetailProd = false;
        clase.showDescription = true;
        clase.arrayProd = clase.arrayProd[0];
      },
      error(err){
        console.log(err);
      }
    });
  }

  OtherPrice(){
    const prod: any = {
      "idProd" : this.arrayProd.idProducto
    }
    const clase = this;
    this.prodService.queryOtherPrice(prod).subscribe({
      next(data){
        clase.otherPrice = data;
        clase.showMsgLoadingDetailProd = false;
        clase.showDescription = true;
      },
      error(err){
        console.log(err);
      }
    });
  }

  prodSugerations(){
    const prod: any = {
      "nameProd" : this.nameProd.split(" ")[0]
    }
    const clase = this;
    this.prodService.searchProdSugerations(prod).subscribe({
      next(data){
        clase.showMsgLoadingDetailProd = false;
        clase.showDescription = true;
        clase.prods = data;
      },
      error(err){
        console.log(err);
      }
    });
  }

  goBack(){
    this.location.back();
  }

  goDetailProd(nameProd: any){
    this.router.navigate(['detalle-producto/'+nameProd]);
  }
}
