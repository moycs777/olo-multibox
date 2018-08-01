import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productDetail'
})
export class ProductDetailPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
