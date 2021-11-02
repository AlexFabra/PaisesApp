import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',

})
export class PorCapitalComponent  {

  capital:string='';
  error:boolean=false;
  paises:Pais[]=[]

  constructor(private PaisService:PaisService) { }

  buscar(capital: string){
    this.error=false;
    this.capital=capital;
    console.log(this.capital);
    //para buscar capital en el servicio llamamos al método correspondiente. 
    //Si la capital ha cambiado, se ejecutará el subscribe 
    //(se suscribe a un Observable, que es lo que retorna buscarCapital):
    this.PaisService.buscarCapital(this.capital).subscribe(
      (paises)=>{this.paises=paises},
      (err)=> {this.error=true;this.paises=[]}
    );
  }
  sugerencias(pais:string){
    
  }
}

