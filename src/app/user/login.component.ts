import {Component} from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent{
  username;
  password;

  login(formValues): void{
    console.log(formValues);
  }
}
