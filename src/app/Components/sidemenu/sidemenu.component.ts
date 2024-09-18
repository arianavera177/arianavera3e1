import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  //1.Configurar el componete.
/*Un string que almacena el nombre del usuario.
Un string que determina el color de fondo del menú.
Un string que especifica el ancho del menú.
Un booleano que controla si el menú es visible o no.*/

userName:string="Ariana Vera";
theme:string="";
widhtMenu:number=50;
visibleMenu:boolean=true;

//2. Añade Métodos al Componente:
setVisibilityMenu():void{//Define un método que alterna la visibilidad del menú.
this.visibleMenu=!this.visibleMenu;//falso a verdadero
}
setThemeColor(color:string):void{//Define un método que recibe un nuevo color y para cambiar el color de fondo del menú.
 this.theme=color;
}

setSizeMenu(){
this.widhtMenu+=10;
if(this.widhtMenu>300){
this.widhtMenu=350;
}



  }






  








}
