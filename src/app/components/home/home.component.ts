import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

//Inicialización de variables, se inicializan como vacias a cargar y de tipo boolean
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
//Se carga el servicio de spotify
  constructor( private spotify: SpotifyService) {
    //Loading toma el valor de true, para mostrar el icono de espera
    this.loading = true;
    //Se incializa con false ya que aun no inicia el proceso de busqueda
    this.error = false;
    //Se trae el listado de los nuevos sensillos de spotify, se subscribe la data y se muestra en pantalla y en consola mediante un arrayList
    //Si sucede algun error, se avizara mediante un mensaje de alerta y mediante consola
    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, ( errorServicio ) => {
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
      });
  }

}
