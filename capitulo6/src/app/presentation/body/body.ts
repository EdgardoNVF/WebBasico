import { Component, signal, WritableSignal } from '@angular/core';
import { Product } from '../../domain/entities';
import { Productcard } from '../productcard/productcard';

@Component({
  imports: [Productcard],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {
  products:WritableSignal<Product[]> = signal([
    {name:"agua", brand:"epura", price:10, description:"agua pura de manantial"},
    {name:"caguama",brand:"indio",price:70,description:"agua pal calor"},
    {name:"jabón",brand:"venus",price:10,description:"jabón rompe hogares"}
  ]); 

  deleteProduct(name:string){
     this.products.set(
      this.products().filter(t=>t.name != name)
     );
  }

  
}
