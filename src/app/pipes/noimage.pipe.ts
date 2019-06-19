import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
//Pipe para la gestion de imagen...si no hoy imagen de la pista o artista, tomara una imagen por defecto
  transform(images: any[]): string {
    if ( !images ) {
      return 'assets/img/noimage.png';
    }

    if ( images.length > 0 ) {
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }


  }

}
