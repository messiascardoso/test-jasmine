import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  auth( user: string, password: string): boolean{
    if( user === 'test' && password === '123456' ){
      localStorage.setItem('token','logado');
      return true
    }else{
      return false
    }
  }



}
