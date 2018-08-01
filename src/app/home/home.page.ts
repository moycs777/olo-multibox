import { Component } from '@angular/core';
//import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { TrackingsService } from '../services/trackings.service';
import { NavController } from '@ionic/angular';
import { RouterModule, Routes, Router } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(
    private splashScreen: SplashScreen, 
    public trackingsService:TrackingsService,
    public navCtrl:NavController,
    public router: Router 
    ) 
    {
      this.splashScreen.show();
    }

  tracking_id:any;
  myProducts:any;

  showVal(val){
    this.myTracks()
  }

  myTracks(){
    this.trackingsService.getTrackings()
      .subscribe(data => {
        this.myProducts = data;
          console.log("lo q llega: " + JSON.stringify(data));
        },
        err => console.log(err)
      )
  }

  searchProduct(item){
    console.log("funcion de ver detalle del producto");
    this.router.navigateByUrl('detail/' + item.id);
    
  }

}
