import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GetDataService } from '../services/get-data.service';
import { GetItemsIntoCartService } from '../services/get-items-into-cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent {

  categoryID; 
  allCategoryItems;
  alrtMessage: boolean;
  loading:boolean;

  constructor(route: ActivatedRoute, private getData: GetDataService, private addProductToCart: GetItemsIntoCartService, private toastr:ToastrService) {
    
    route.params.subscribe((params) => {
      this.categoryID = params["id"];
      console.log(this.categoryID);
      this.loading = false;

      this.getData.getProductDeatils(`https://fakestoreapi.com/products/category/${this.categoryID}`).subscribe((categoryItems) => {
        console.log(categoryItems);
        this.allCategoryItems = categoryItems;
        this.loading = true;
      })
    });
  }

  getProductIntoCart(productID){
    console.log(productID);
    if(this.addProductToCart.addToCart(productID)){
      this.alrtMessage = true;
      console.log("true");

      this.toastr.success('Product Added to cart!');
      
    }else {
      this.alrtMessage = false;
      console.log("false");

      this.toastr.warning('Product already in the cart!')
    }
  }

}
