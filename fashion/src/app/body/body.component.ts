import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  listItem = [];
  menu = [];
  constructor() { 
    this.menu = [
      "Shoes",
      "T-Shirt",
      "Dress",
      "vallet",
      "Hat",
       "Shoes",
      "T-Shirt",
      "Dress",
      "vallet",
      "Hat",
       "Shoes",
      "T-Shirt",
      "Dress",
      "vallet",
      "Hat",
    ]
    this.listItem = [
       {
        image:"item.jpg",
        name: "T Shirt",
        priceSale:"20,000",
        priceOrigin:"30,000"
      },
      {
        image:"item3.jpeg",
        name: "T Shirt",
        priceSale:"20,000",
        priceOrigin:"30,000"
      },
       {
        image:"item3.jpeg",
        name: "T Shirt",
        priceSale:"20,000",
        priceOrigin:"30,000"
      },
       {
        image:"item3.jpeg",
        name: "T Shirt",
        priceSale:"20,000",
        priceOrigin:"30,000"
      },
       {
        image:"item5.jpg",
        name: "T Shirt",
        priceSale:"20,000",
        priceOrigin:"30,000"
      },
       {
        image:"item3.jpeg",
        name: "T Shirt",
        priceSale:"20,000",
        priceOrigin:"30,000"
      }
      
    ]
  }

  ngOnInit() {
  }

}
