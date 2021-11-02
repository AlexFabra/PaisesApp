import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  // declaramos Output para emitir el termino introducido por el usuario, lo cual haremos en buscar()
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  //el debounce se emitirá cuando yo deje de escribir:
  debouncer: Subject<string> = new Subject();

  termino: string = '';
  //se dispara cuando el componente es creado:
  ngOnInit() {
    //cuando el debouncer deja de recibir valores por 300ms, entonces emite el valor.
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
        this.onDebounce.emit( valor );
      });
  }

  buscar() {
    //emitimos el termino. Se recibirá en por-pais.component.html
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
    this.debouncer.next( this.termino );
    // se puede mostrar a tiempo real el termino que se está recibiendo: console.log(this.termino)
  }
  

}
