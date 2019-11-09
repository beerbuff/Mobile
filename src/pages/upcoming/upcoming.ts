import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {
  UpArray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadUpcoming();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }

  loadUpcoming() {
    this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=b4e1da8db33117e80ca69a5af4b7bc3e&language=en-US&page=1").subscribe((data: any) => {
      this.UpArray = data.results;
      console.log(this.UpArray);
    }, (error) => { console.log(error) });


  }


  viewDetail(item){
    this.navCtrl.push("MovieDetailPage", item);
  }


}// end class
