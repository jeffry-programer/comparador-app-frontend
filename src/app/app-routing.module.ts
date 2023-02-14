import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'salir',
    loadChildren: () => import('./salir/salir.module').then( m => m.SalirPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'productos/:name',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'detalle-producto/:nameProd',
    loadChildren: () => import('./detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  {
    path: 'Listas',
    loadChildren: () => import('./listas/listas.module').then( m => m.ListasPageModule)
  },
  {
    path: 'subcategoria/:nameCategory',
    loadChildren: () => import('./subcategoria/subcategoria.module').then( m => m.SubcategoriaPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'prods-subcategoria/:nameSubCategory',
    loadChildren: () => import('./prods-subcategoria/prods-subcategoria.module').then( m => m.ProdsSubcategoriaPageModule)
  },


  {
    path: 'detalle-lista/:listId',
    loadChildren: () => import('./detalle-lista/detalle-lista.module').then( m => m.DetalleListaPageModule)
  },
  {
    path: 'comparar-lista/:listId',
    loadChildren: () => import('./comparar-lista/comparar-lista.module').then( m => m.CompararListaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
