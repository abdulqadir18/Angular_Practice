import {Product} from './product'

export class ProductService{

  public  getProducts() {
    let products:Product[];

    products=[
      new Product(1,'Fan',500),
      new Product(2,'Cooler',750),
      new Product(3,'AC',100)
    ]

    return products;
  }
}
