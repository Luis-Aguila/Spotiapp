import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
//Se inicializan variables vacias para artistas y sus toptrack y loading en boolean para el cargado
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;
  //Se inicializa el servicio de spotify y el identificador de meno para realizar un active en el menu
  constructor( private router: ActivatedRoute,
              private spotify: SpotifyService) {
                //Loading toma el valor de true para carga de icono de espera
    this.loading = true;
    //Se traspazan las id de los artistas y sus toptrack para pasarlas al enrutador
    this.router.params.subscribe( params => {
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    });
   }
//Carga el artista seleccionado mediante su id
//Se cambia el valor de loadin al iniciar en true y al finalizar en false
//Se subscribe en el servicio de spotify y se solicita el dato del artista, esta información se muestra en pantalla y en consola
   getArtista( id: string) {
    this.loading = true;
    this.spotify.getArtista(id)
          .subscribe( artista => {
            console.log(artista);
            this.artista = artista;
        this.loading = false;

          });
   }
//Mediante el id del artista, se cargan sus toptrack y se muestra en pantalla, a su vez se muestra por consola
   getTopTracks( id: string ) {
     this.spotify.getTopTracks( id )
             .subscribe( topTracks => {
               console.log(topTracks);
               this.topTracks = topTracks;
             });
   }
}
