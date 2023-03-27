import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { GetItemsIntoCartService } from '../services/get-items-into-cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  productsUrl = "https://fakestoreapi.com/products";
  loading:boolean;
  alrtMessage:boolean;
  allProducts;

  constructor(private getData:GetDataService, private addProductToCart:GetItemsIntoCartService, private toastr:ToastrService){
    this.loading = false;
  }

  ngOnInit(): void {
    this.getData.getProductDeatils(this.productsUrl).subscribe((products) => {
      console.log(products);
      this.allProducts = products;
      this.loading = true
    })
  }

  getProductIntoCart(productID){
    console.log(productID);
    if(this.addProductToCart.addToCart(productID)){
      this.alrtMessage = true;
      console.log("true");

      this.toastr.success('Product Added to cart!');
      console.log(this.addProductToCart.getCartIDs());
      
    }else {
      this.alrtMessage = false;
      console.log("false");

      this.toastr.warning('Product already in the cart!')
    }
  }

}
