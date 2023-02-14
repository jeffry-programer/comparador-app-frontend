import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  correo: any;
  clave: any;
  response: any;
  errorLogin: boolean = false;

  formularioRegistro: FormGroup;
  messageLogin: string = '';
  msgLoading: string = 'Solicitud en proceso...';
  showMsgLoading: boolean = false;

  constructor(public fb: FormBuilder, private router:Router, private authService: AuthService){
    this.formularioRegistro = this.fb.group({
      'correo': new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(this.emailPattern)]),
      'clave': new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(12)])
    });
  }

  ngOnInit() {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['principal']);
    }
  }

  login(){
    const clase = this;
    if(!this.formularioRegistro.valid){
      this.messageLogin = 'Datos invalidos';
      this.errorLogin = true;
    }else{
      this.showMsgLoading = true;
      this.errorLogin = false;
      const newUser = {
        "correo": this.correo,
        "Clave": this.clave
      };
      this.authService.loginUser(newUser).subscribe({
        next(data){
          clase.showMsgLoading = false;
          clase.response = data;
          localStorage.setItem("token", clase.response.token);
          clase.router.navigate(['principal']);
        },
        error(msg) {
          clase.showMsgLoading = false;
          clase.messageLogin = 'Credenciales invalidas';
          clase.errorLogin = true;
          console.log('Error al iniciar sesion: ',msg);
        },
      });
    }
  }

}
