import { Component } from '@angular/core';

@Component({
  selector: 'gallery',
  template: `
    <div class="gallery-wrapper">
      <selected-image></selected-image>
      <div class="gallery">
        <div class="thumbnail"></div>
        <div class="thumbnail"></div>
        <div class="thumbnail"></div>
        <div class="thumbnail"></div>
        <div class="thumbnail"></div>
        <div class="thumbnail"></div>
      </div>
    </div>
  `
})

export class GalleryComponent {

}
