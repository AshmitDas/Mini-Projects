import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { GetItemsIntoCartService } from '../services/get-items-into-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  allItemsID = [];
  allItems = [];
  loading:boolean;

  constructor(private getData:GetDataService, private addProductToCart:GetItemsIntoCartService){
  }

  ngOnInit(): void {
    this.allItemsID = this.addProductToCart.getCartIDs();
    this.allItemsID.forEach((items) => {
      this.loading = false;
      this.getData.getProductDeatils(`https://fakestoreapi.com/products/${items}`).subscribe((item) => {
        this.allItems.push(item);
        console.log(item);
      })
    })
    this.loading = true;
  }

}
