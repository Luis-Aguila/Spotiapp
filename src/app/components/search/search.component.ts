import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
//inicialización de variables de clase
  artistas: any[] = [];
  loading: boolean;
//Se inicia servicio de spotify
  constructor(private spotify: SpotifyService) {  }

  //Función buscar...se ingresa un caracter y comienza la busqueda
  //La letra o palabra a buscar sera mostrada en la consola y si encuentra resultados la mostrara en pantalla
  buscar(termino: string) {
    console.log(termino);
    this.loading = true;
    this.spotify.getArtistas( termino )
        .subscribe((data: any) => {
          console.log(data);
          this.artistas = data;
          this.loading = false;
        });

  }

}
