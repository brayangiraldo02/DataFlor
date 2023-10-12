import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public isLoggedIn: boolean = false;
  public isLoggedInAdmin: boolean = false;
  public showNavbar:boolean = false; //Se crea un bool para el navbar.
  public logo:string = '../../../assets/nav/img/dataflor.png'; //Se crea una variable para el logo.
  public username:string = ''

  //Función para mostrar el navbar responsive.
  public toggleNavbar(): void {
    //Se define valor a mostrar: solo true o false.
    this.showNavbar = !this.showNavbar;
    //Mostrar en consola el valor seleccionado.
    console.log(this.showNavbar);
  }
}
