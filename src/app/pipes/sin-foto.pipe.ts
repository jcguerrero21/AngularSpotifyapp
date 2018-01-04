import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinFoto'
})
export class SinFotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {

    let noimagen = 'assets/img/noimage.png'

    if(!imagenes){
      return noimagen;
    }

    return ( imagenes.length > 0)? imagenes[1].url : noimagen;
  }

}
