import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activo: boolean): string {
    if(activo){
      let cadena = '';
      for(let i = 0; i<value.length; i++){
        cadena = cadena+'*';  //o uso de concat
      }
      return cadena;
    }
    else{
      return value;
    }
  }

}
