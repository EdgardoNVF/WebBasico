import { Component, input, output } from '@angular/core';
import { Product } from '../../domain/entities';

@Component({
  imports: [],
  selector: 'app-productcard',
  styleUrl: './productcard.css',
  templateUrl: './productcard.html',
})
export class Productcard {
  //el componente productcard debe de recibir un producto
  product=input<Product>();

  //emite el nombre del producto que quiero eliminar
  nameDelete=output<string>();

  emitProductName(){
    
    this.nameDelete.emit(this.product()?.name??"");
    console.log(this.product()?.name);
  }

}
