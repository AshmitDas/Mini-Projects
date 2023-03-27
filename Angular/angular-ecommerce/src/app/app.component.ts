import { Component, OnInit } from '@angular/core';
import { GetDataService } from './services/get-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ecommerce';

  categoryUrl = "https://fakestoreapi.com/products/categories";

  allCategories;

  constructor(private getData:GetDataService){

  }

  ngOnInit(): void {
    this.getData.getProductDeatils(this.categoryUrl).subscribe((categories) => {
      console.log(categories);
      this.allCategories = categories;
    })
  }

}
