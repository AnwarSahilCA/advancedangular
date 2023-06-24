import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productId:number=0;
  //productId: any;
constructor(private productService: ProductServiceService) {}


ngOnInit(): void {
}

deleteProduct(): void {
 
    this.productService.deleteProductById(this.productId).subscribe(
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
