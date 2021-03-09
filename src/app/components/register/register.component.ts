import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  textMostrar = "";



  onSubmit(){
    if($('#inputNom').val() == "" ||$('#inputEmail').val() == "" || $('#inputPassword').val() == "" || $('#inputPassword2').val() == "" ){
      this.textMostrar = "Has d'omplenar tots els camps";
      this.registerSuccess = true;
    }else if($('#inputPassword').val() != $('#inputPassword2').val()){
      this.textMostrar = "La contrasenya no coincideix!"
      this.registerSuccess = true;
    }
    
    
    else{
      alert("fine")
      this._router.navigateByUrl('')
    }
    
  }
  
  

  onClosed() {
    //console.log("closing...")
    console.log(this.registerSuccess)
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