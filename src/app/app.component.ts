import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Principal', url: '/principal', icon: 'home' },
    { title: 'Perfil', url: '/folder/Perfil', icon: 'person' },
    { title: 'Notificaciones', url: '/folder/Notificaciones', icon: 'mail' },
    { title: 'Categorias', url: 'categorias', icon: 'albums' },
    { title: 'Listas', url: '/Listas', icon: 'list' },
    { title: 'Salir', url: '/salir', icon: 'log-out' },
  ];
  public labels = ['Facebook', 'Instagram', 'Youtube', 'Twitter'];
  public iconLabel = ['logo-facebook','logo-instagram','logo-youtube','logo-twitter'];
  usuarios = [];

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }
}
