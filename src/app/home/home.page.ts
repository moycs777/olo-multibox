import { Component } from '@angular/core';
//import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { TrackingsService } from '../services/trackings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(
    private splashScreen: SplashScreen, 
    public trackingsService:TrackingsService) 
    {
      this.splashScreen.show();
    }

  tracking_id:any;
  myProducts:any;

  showVal(val){
    /* console.log(this.tracking_id);
    this.trackingsService.search(this.tracking_id);
    console.log(this.trackingsService.getTrackings()); */
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
  }

}
