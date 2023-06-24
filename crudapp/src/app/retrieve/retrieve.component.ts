import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product'
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  id: any;
  constructor(private service:ProductServiceService)
  {
    
  }
  products: Product[]=[];
  product1: Product = new Product;
  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts():any{
    this.service.getProduct().subscribe((products)=>{
    this.products = products;
  });
}
  getProductById1():any{
    
    this.service.getProductById(this.id).subscribe((product1)=>{
      this.product1=product1;
    });
  }

  }

  



