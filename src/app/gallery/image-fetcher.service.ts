import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageFetcher {
  constructor(private http: HttpClient) { }


  assetImages = [
    '/assets/images/20151223_175318.jpg',
    '/assets/images/20160514_115826.jpg',
    '/assets/images/20160514_171245.jpg',
    '/assets/images/20160910_194225.jpg',
    '/assets/images/20160911_152526_Richtone(HDR).jpg',
    '/assets/images/20170426_202812.jpg',
    '/assets/images/20170807_142340.jpg',
    '/assets/images/20171008_141651.jpg',
    '/assets/images/20180330_103129.jpg',
    '/assets/images/20180331_223941.jpg',
    '/assets/images/20181026_182741.jpg',
    '/assets/images/20181026_182822.jpg',
    '/assets/images/20190316_182400.jpg',
    '/assets/images/20190602_130453.jpg',
    '/assets/images/20190602_135739.jpg',
    '/assets/images/20190831_133457.jpg',
    '/assets/images/20190831_151947.jpg',
    '/assets/images/20190831_153221.jpg',
    '/assets/images/20190901_115841.jpg',
    '/assets/images/20200729_203353.jpg',
    '/assets/images/DSC00058.JPG',
    '/assets/images/DSC00068.JPG',
    '/assets/images/DSC00170.JPG',
    '/assets/images/DSC00193.JPG',
    '/assets/images/DSC00265.JPG',
    '/assets/images/DSC00293.JPG',
    '/assets/images/DSC00344.JPG'
  ];

  // authKey = '563492ad6f9170000100000105e0d20fc08f4be7a2049f376bcb492a';
  authKey = '18667369-b6a36730efcf6feb4722aef27';
  // picUrl = 'https://api.pexels.com/v1/search?query=landscape&per_page=30&page=';
  picUrl = 'https://pixabay.com/api/?key=18667369-b6a36730efcf6feb4722aef27&q=landscape&per_page=20&page=';


  // getImagesFromWeb() {
  //   const urlHeaders = new HttpHeaders().set('Authorization', this.authKey);
  //   return this.http.get(this.picUrl + Math.floor(Math.random()*20), {headers: urlHeaders});
  // }

  getImagesFromWeb() {
    return this.http.get(this.picUrl + Math.floor(Math.random()*20));
  }

  getLocalImages() {
    return this.assetImages;
  }
}
