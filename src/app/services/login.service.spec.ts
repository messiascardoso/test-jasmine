import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[ LoginService ]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  //Neste teste esperando um retorno true
  it('Usuário e senha válidos', inject([ LoginService ], (service: LoginService) => {
    expect(service.auth('test', '12345')).toBeTruthy();
  }));

  //Espera um retorno false
  it(' Usuário e senha inválido', inject([ LoginService ], ( service : LoginService)=>{
    expect( service.auth('test', '657657')).toBeFalsy()
  }));


});
