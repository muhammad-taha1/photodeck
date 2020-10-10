import { Component, OnInit } from '@angular/core';
import { ImageFetcher } from './image-fetcher.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [];

  constructor(private imageFetcher: ImageFetcher) { }

  ngOnInit(): void {
    this.localImages();
  }

  localImages() {
    this.images = this.imageFetcher.getLocalImages();
  }

}
