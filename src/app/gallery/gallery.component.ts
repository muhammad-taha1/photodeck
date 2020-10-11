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
  oldUrl = '';

  constructor(private imageFetcher: ImageFetcher,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.url.subscribe((url) => {
      if (url[0].path.includes('local')) {
        this.localImages();
      }
      else {
        this.webImages();
      }

      console.log(this.oldUrl);
      if (url[0].path !== this.oldUrl) {
        this.oldUrl = url[0].path;
      }
    });

  }

  localImages() {
    this.clearCurrentImages();
    this.images = this.imageFetcher.getLocalImages();
  }

  webImages() {
    this.clearCurrentImages();
    this.imageFetcher.getImagesFromWeb().subscribe(imgs => {
      imgs['photos'].forEach(element => {
        this.images.push(element.src.medium);
      });
    });

  }

  clearCurrentImages() {
    this.images = [];
    // location.reload();
  }
}
