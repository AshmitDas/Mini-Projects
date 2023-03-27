import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GetDataService } from '../services/get-data.service';
import { GetItemsIntoCartService } from '../services/get-items-into-cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  loading: boolean;
  itemID;
  productData;
  alrtMessage;

  constructor(private getData: GetDataService, private toastr:ToastrService ,route: ActivatedRoute, private addProductToCart: GetItemsIntoCartService) {

    route.params.subscribe((params) => {
      this.itemID = params["id"];
      console.log(this.itemID);
      this.loading = false;
    })
  }

  ngOnInit(): void {
    this.getData.getProductDeatils(`https://fakestoreapi.com/products/${this.itemID}`).subscribe((Item) => {
      console.log(Item);
      this.productData = Item;
      this.loading = true;
    })
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
