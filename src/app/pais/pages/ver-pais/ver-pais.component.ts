import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap,tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  idPais!:string;
  poblacion!:number;
  independencia!:boolean;

  //inyectamos activatedRoute para suscribirnos a cualquier cambio del url:
  constructor( private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

   ngOnInit(): void {

  //   //con esto tenemos acceso al observable donde estan los parametros
  //   this.activatedRoute.params
  //   //switchMap te permite procesar un observable (param..id de activatedRoute.params pasará a ser el return de getPaisPorAlpha)
  //   .pipe(
  //     switchMap((param)=> this.paisService.getPaisPorAlpha(param.id)),
  //     //tap es un operador que dispara un efecto secundario, recibe el id y lo imprime en consola
  //     tap(console.log) //equivale a tap(resp => console.log(resp))
  //     )
  //     //pais será igual al que recibo: 
  //   .subscribe(pais => this.pais = pais);

   // otra forma de hacer lo mismo, sin switchMap:

    this.activatedRoute.params.subscribe(
      params => {
        console.log(params.id)
        this.idPais=params.id;
        this.paisService.getPaisPorAlpha(params.id).subscribe(
          pais => {
            //console.log(pais);
            this.pais=pais;
            this.poblacion=pais.population
            this.independencia=pais.independent
          }
        );
      });
  }

}
