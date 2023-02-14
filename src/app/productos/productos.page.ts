import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdService } from '../prod-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private prodService: ProdService, private router:Router) { }

  public nombreProducto!: string;
  public productos: any = [];
  public msg: string = 'Cargando...';
  public showMsg: boolean = true;

  ngOnInit(){
    const clase = this;
    this.nombreProducto = this.activatedRoute.snapshot.paramMap.get('name') as string;
    const prodSearch = {
      "nameProd": this.nombreProducto,
    };
    this.prodService.searchProducts(prodSearch).subscribe({
      next(data){
        clase.showMsg = false;
        clase.productos = data;
      },
      error(err){
        console.log(err);
      }
    });
  }

  regresar(){
    this.router.navigate(['principal']);
  }

  goDetailProd(nameProd: string){
    this.router.navigate(['detalle-producto/'+nameProd]);
  }

}
