import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageFetcher {

  assetImages = [
    '/assets/images/20151223_175318.jpg',
    '/assets/images/20151227_173158.jpg',
    '/assets/images/20160514_115826.jpg',
    '/assets/images/20160514_171245.jpg',
    '/assets/images/20160910_194225.jpg',
    '/assets/images/20160911_152526_Richtone(HDR).jpg',
    '/assets/images/20170426_202812.jpg',
    '/assets/images/20170807_142327.jpg',
    '/assets/images/20170807_142340.jpg',
    '/assets/images/20171008_141651.jpg',
    '/assets/images/20180330_103129.jpg',
    '/assets/images/20180331_223941.jpg',
    '/assets/images/20181026_182741.jpg',
    '/assets/images/20181026_182822.jpg',
    '/assets/images/20181110_142522.jpg',
    '/assets/images/20190316_182400.jpg',
    '/assets/images/20190316_182403.jpg',
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
    '/assets/images/DSC00344.JPG'];

  getImagesFromWeb() {

  }

  getLocalImages() {
    return this.assetImages;
  }
}
