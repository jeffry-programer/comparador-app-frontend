import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GeneralService } from '../general.service';
import { ProdService } from '../prod-service.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})

export class PrincipalPage implements OnInit {

  constructor(private router:Router, private generalService:GeneralService, private prodService:ProdService) { }

  nombreProducto: any;
  categorias: any = [];
  productos: any = [];
  images: any = [{
    'img' : 'https://tucomparas.com.co/vistas/img/img-carousel/comparaProductos.svg',
    'titulo' : 'AHORRA EN TUS COMPRAS',
    'texto' : 'Comparando productos para obtener el mejor precio',
    'clase' : 'img-carrusel'
  },
  {
    'img' : 'https://tucomparas.com.co/vistas/img/img-carousel/ahorro-listas-compras.svg',
    'titulo': 'PUEDES COMPARAR TUS LISTAS',
    'texto' : 'Y ahorra al encontrando la tienda con el mejor precio',
    'clase' : 'img-carrusel'
  },
  {
    'img' : 'https://tucomparas.com.co/vistas/img/img-carousel/crea-listas-compras.svg',
    'titulo' : 'CREA TU LISTA DE COMPRAS',
    'texto' : 'Y agrega todos los productos que desees.',
    'clase' : 'img-carrusel-2'
  }];
  showMsgLoadingProds: boolean = true;
  showMsgLoadingCategories: boolean = true;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  ngOnInit() {
    this.consultarCategorias();
    this.consultarProductosMasBuscados();
  }

  consultarProductosMasBuscados(){
    const clase = this;
    this.prodService.prodMoreSearches().subscribe({
      next(data){
        clase.showMsgLoadingProds = false;
        clase.productos = data;
      },
      error(err){
        console.log(err)
      },
    });
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

  buscarProducto(){
    this.router.navigate(['productos/'+this.nombreProducto]);
  }

  goDetailProd(nameProd: string){
    this.router.navigate(['detalle-producto/'+nameProd]);
  }

  goCategories(nameCategory: string){
    this.router.navigate(['subcategoria/'+nameCategory]);
  }

}
