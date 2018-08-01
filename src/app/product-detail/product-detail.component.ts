import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      console.log('param : ' + id);

      // In a real app: dispatch action to load the details here.
    });
    console.log('product detail on init ');
  }

}
