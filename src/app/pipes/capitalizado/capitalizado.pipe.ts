import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean): string {
    value = value.toLocaleLowerCase();

    //Dividir el string(value) en palabras
    let palabras = value.split('');

    //Verificar cuando "todas" viene true; se capitaliza cada palabra del string
    if(todas){
      palabras = palabras.map( palabra => {
        return palabra[0].toUpperCase() + palabra.substr(1);
      })
    }
    else{
      palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
    }

    return palabras.join('')
  }

}
