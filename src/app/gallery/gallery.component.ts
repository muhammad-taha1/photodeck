import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ImageFetcher } from './image-fetcher.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [];

  constructor(private imageFetcher: ImageFetcher,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.url.subscribe((url) => {
      if (url[0].path.includes('local')) {
        this.localImages();
      }
      else {
        this.webImages();
        // this.localImages();
      }
    });

  }

  localImages() {
    this.clearCurrentImages();
    this.images = this.imageFetcher.getLocalImages();
  }

  // webImages() {
  //   this.clearCurrentImages();
  //   this.imageFetcher.getImagesFromWeb().subscribe(imgs => {
  //     imgs['photos'].forEach(element => {
  //       this.images.push(element.src.medium);
  //     });
  //   });

  // }

  webImages() {
    this.clearCurrentImages();
    this.imageFetcher.getImagesFromWeb().subscribe(imgs => {
      imgs['hits'].forEach(element => {
        this.images.push(element.webformatURL);
      });
    });

  }

  clearCurrentImages() {
    this.images = [];
    this.images.length = 0;
    this.images = [...this.images];
    if (document.querySelector('div#imageContainer')) {
      document.querySelector('div#imageContainer').innerHTML = "";
    }
  }
}
