import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  private apiUrl2: string = 'https://restcountries.com/v2'
  get httpParams (){
    return new HttpParams().set('fields','name,capital,alfa2Code,flags,population,region,independent');
  }

  constructor( private http: HttpClient) { }

  //estas funciones a datos mediante url y retornan un array de objetos Observable que tendran los datos de cada pais (nombre, capital, imagen, etc.)

  buscarPais(nombrePais:string): Observable<Pais[]>{
    const url=`${this.apiUrl}/name/${nombrePais}`;
    //por qué petición get?
    return this.http.get<Pais[]>(url); //,{params:this.httpParams}
  }

  buscarCapital( termino: string ):Observable<Pais[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Pais[]>( url );
  }

  getPaisPorAlpha( id: string ):Observable<Pais>{
    const url = `${ this.apiUrl2 }/alpha/${ id }`;
    return this.http.get<Pais>( url );
  }

  buscarRegion(region:string):Observable<Pais[]>{
    //const url =`${ this.apiUrl2 }/regionalbloc/${region}`;
    //return this.http.get<Pais[]>(url,{params: this.httpParams});
    const url =`${this.apiUrl2}/regionalbloc/${region}`;//?fields=name,capital,alfa2code,flags,population
    return this.http.get<Pais[]>( url );
  }

}
