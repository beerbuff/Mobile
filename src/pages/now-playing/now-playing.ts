import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NowPlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-now-playing',
  templateUrl: 'now-playing.html',
})
export class NowPlayingPage {


  ObArray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadNowPlaying();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad NowPlayingPage');
  }



  loadNowPlaying() {
    this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=b4e1da8db33117e80ca69a5af4b7bc3e&language=en-US&page=1").subscribe((data: any) => {
      this.ObArray = data.results;
      console.log(this.ObArray);
    }, (error) => { console.log(error) });


  }

}//end class
