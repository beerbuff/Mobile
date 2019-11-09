import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {

  PopArray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadPopular();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }

  loadPopular() {
    this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=b4e1da8db33117e80ca69a5af4b7bc3e&language=en-US&page=1").subscribe((data: any) => {
      this.PopArray = data.results;
      console.log(this.PopArray);
    }, (error) => { console.log(error) });


  }


}//end class
