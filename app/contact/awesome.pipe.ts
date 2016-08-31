import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'awesome'
})
export class AwesomePipe implements PipeTransform { 
    transform(s:string ){
        return s ? 'Awesome ' + s : '';
    }
}
