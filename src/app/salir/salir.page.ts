import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-salir',
  templateUrl: './salir.page.html',
  styleUrls: ['./salir.page.scss'],
})
export class SalirPage implements OnInit {

  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit() {
    this.cerrarSesion();
  }

  cerrarSesion(){
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }
}
