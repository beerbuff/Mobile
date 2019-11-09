import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  DetailArray = {title:'',release_date:'',overview:''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
    this.DetailArray = this.navParams.data;
    console.log(this.DetailArray);
  }

  


}// end class
