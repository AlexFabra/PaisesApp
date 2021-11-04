import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`button{margin-right:10px;}`
  ]
})
export class PorRegionComponent {

  regiones: string[] =
  [
    'EU',
    'EFTA', 
    'CARICOM',
    'PA',  
    'AU',   
    'USAN', 
    'EEU',  
    'AL',   
    'ASEAN',
    'CAIS', 
    'CEFTA',
    'NAFTA',
    'SAARC'
  ]

  paises:Pais[]=[];
  
  regionActiva:string=""
  constructor(private paisService: PaisService) { }
  //funcion para que el usuario observe el botón pulsado:
  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }
  activarRegion(region:string){
    if (region===this.regionActiva){return;}
    this.regionActiva=region;
    //llamar al servicio:
    this.paisService.buscarRegion(this.regionActiva).subscribe(
      (paises)=>{this.paises=paises}
    );
  }
}
