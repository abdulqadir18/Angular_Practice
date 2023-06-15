import { Component } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})

export class AppComponent
{

   products:Product[] = [];
  //  productService;

   constructor(private productService: ProductService){
    //  this.productService=new ProductService();
   }

   getProducts() {

     this.products=this.productService.getProducts();
   }

}
