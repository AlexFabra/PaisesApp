import { Component, OnInit } from '@angular/core';
import { NgControlStatusGroup } from '@angular/forms';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  pais:string='';
  error:boolean=false;
  paises:Pais[]=[]
  
  constructor(private PaisService:PaisService){}

  buscar(){
    this.error=false;
    console.log(this.pais);
    this.PaisService.buscarPais(this.pais).subscribe(
      (paises)=>{console.log(paises);this.paises=paises},
      (err)=> {this.error=true;this.paises=[]}
    );
  }

}
