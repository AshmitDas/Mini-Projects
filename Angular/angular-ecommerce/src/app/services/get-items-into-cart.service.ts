import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetItemsIntoCartService {

  itemsIDInCart = [];
  constructor() { }

  public addToCart(itemID){
    if(this.itemsIDInCart.includes(itemID)){
      return false;
    }else{
      this.itemsIDInCart.push(itemID);
      return true;
    }
  }

  public getCartIDs(){
    return this.itemsIDInCart;
  }
}
