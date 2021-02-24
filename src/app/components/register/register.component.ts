import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showPass = "Mostrar contrasenya";
  passwordShown: boolean = false;
  passwordType: string = 'password';

  
  registerSuccess = false;
  constructor() { }

  ngOnInit(): void {
  }

  //Register submit button
  onSubmitRegister(){
    console.log("Submited");
    this.registerSuccess = true;
  }
  

  onClosed() {
    console.log("closing...")
    this.registerSuccess = false;
  }


  showOrHidePassword() {
    if (this.passwordShown) {
        this.passwordShown = false;
        this.passwordType = 'password';
        this.showPass = "Mostrar contrasenya";
    }
    else {
        this.passwordShown = true;
        this.passwordType = 'text';
        this.showPass = "Ocultar contrasenya";
    }
  }


}