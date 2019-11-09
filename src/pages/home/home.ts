import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  constructor(public navCtrl: NavController) {

  }
  
  
  NowPlaying(){
    this.navCtrl.push('NowPlayingPage');
  
  }



  Upcoming(){
    this.navCtrl.push('UpcomingPage');
  
  }


  Popular(){
    this.navCtrl.push('PopularPage');
  
  }
  

  TopRate(){
    this.navCtrl.push('TopRatedPage');
  
  }


}//end
