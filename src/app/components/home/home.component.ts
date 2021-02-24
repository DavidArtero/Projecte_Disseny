import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showPass = "Mostrar contrasenya";
  passwordShown: boolean = false;
  passwordType: string = 'password';

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }


  onSubmitIniciarSessio(){
    console.log("Iniciar sessió");
    this._router.navigate(['/home']); 
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
