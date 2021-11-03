import { Component, OnInit } from '@angular/core';
import { NgControlStatusGroup } from '@angular/forms';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  pais:string='';
  error:boolean=false;
  paises:Pais[]=[]
  
  constructor(private PaisService:PaisService){}

  buscar(pais: string){
    this.error=false;
    this.pais=pais;
    this.PaisService.buscarPais(this.pais).subscribe(
      (paises)=>{this.paises=paises},
      (err)=> {this.error=true;this.paises=[]}
    );
  }
  sugerencias(pais:string){
    
  }
}
