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

    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer BQBqsxjI2-07GN5KN5KLZe_rZeb2SzaEmYxpHQnDq7kRHkOSQut5K5ysiJh4J1CORUtAfLMZe6eKQGhvrbc'
    });

    return this.http.get(url, { headers });
  }


  getNewReleases() {
    return this.getQuery('browse/new-releases')
              .pipe( map( data => data['albums'].items));
  }


  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
              .pipe( map( data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
              // tslint:disable-next-line:comment-format
              //.pipe( map( data => data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
              .pipe( map( data => data['tracks']));
  }

}

