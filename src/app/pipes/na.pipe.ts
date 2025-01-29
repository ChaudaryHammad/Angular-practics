import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if(value == null || value == undefined || value == ""){
      return "Value is empty";
    }else{
      return value;
    }
  }

}
