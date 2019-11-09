import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TopRatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-rated',
  templateUrl: 'top-rated.html',
})
export class TopRatedPage {

  TopArray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  this.loadTopRate();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopRatedPage');
  }

  loadTopRate() {
    this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=b4e1da8db33117e80ca69a5af4b7bc3e&language=en-US&page=1").subscribe((data: any) => {
      this.TopArray = data.results;
      console.log(this.TopArray);
    }, (error) => { console.log(error) });


  }



}//end class
