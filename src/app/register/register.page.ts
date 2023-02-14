import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',

  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  name: any;
  email: any;
  password: any;
  msgRegister: boolean = false;
  textMsgRegister: string = '';

  formularioRegistro: FormGroup;
  correo: any;
  Clave: any;
  msgLoading: string = 'Solicitud en proceso...';
  showMsgLoading: boolean = false;

  constructor(public fb: FormBuilder, private authService: AuthService, private router: Router){ 
    this.formularioRegistro = this.fb.group({
      'correo': new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(this.emailPattern)]),
      'Clave': new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(12)])
    })
  }

  ngOnInit(){
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['principal']);
    }
  }

  registerUser(){
    const clase = this;
    if(!this.formularioRegistro.valid){
      this.textMsgRegister = 'Datos invalidos';
      this.msgRegister = true;
    }else{
      this.msgRegister = false;
      this.showMsgLoading = true;
      const newUser = {
        "correo" : this.correo,
        "Clave" : this.Clave,
      };
      this.authService.registerUser(newUser).subscribe({
        next(data){
          clase.showMsgLoading = false;
          clase.router.navigate(['login']);
        },
        error(msg) {
          clase.showMsgLoading = false;
          clase.textMsgRegister = 'Error al registrar';
          clase.msgRegister = true;
          console.log('Error al registrar: ', msg);
        },
      });
    }
  }
}

