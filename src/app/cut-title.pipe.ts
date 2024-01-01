import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutTitle'
})
export class CutTitlePipe implements PipeTransform {

  transform(desc:string , limit:number): string {
    return desc.split(' ').slice(0,limit).join(' ');
  }

}
