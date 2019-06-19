import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
   }
  // tslint:disable-next-line:no-trailing-whitespace
  
  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
//Headers con información del apiweb de spotify
    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer BQBhQReD9KT0jw2mXdKBGPCA3Xrdc-MP4VrtMjtYxbfYtkRBV02-yimm4zJnKBGVZ_Zz03E_X3OkRiUF1RQ'
    });

    return this.http.get(url, { headers });
  }

//Nuevos lanzamientos
  getNewReleases() {
    return this.getQuery('browse/new-releases')
              .pipe( map( data => data['albums'].items));
  }

//Artistas
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
              .pipe( map( data => data['artists'].items));
  }
//Artista en particular
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
              // tslint:disable-next-line:comment-format
              //.pipe( map( data => data['artists'].items));
  }
//Top de artistas
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
              .pipe( map( data => data['tracks']));
  }

}

