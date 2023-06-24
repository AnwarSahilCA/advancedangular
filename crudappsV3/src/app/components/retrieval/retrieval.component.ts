import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-retrieval',
  templateUrl: './retrieval.component.html',
  styleUrls: ['./retrieval.component.css']
})
export class RetrievalComponent implements OnInit {
  
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
deleteProduct(id:number): void {
 
  this.service.deleteProductById(id).subscribe(
      (response) => {
        console.log('Product deleted successfully');
        // Perform any additional actions after deletion if needed
      },
      (error) => {
        console.log('Failed to delete product', error);
        // Handle the error if the deletion fails
      }
    );
}
 

  }

  






