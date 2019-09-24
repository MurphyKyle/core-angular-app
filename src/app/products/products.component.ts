import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductModel } from '../models/ProductModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  title = 'Products'
  products: ProductModel[]

  constructor(service: ProductsService) {
    this.products = service.getProducts()
  }

  ngOnInit() {
  }

}
