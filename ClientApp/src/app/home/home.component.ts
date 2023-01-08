import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  slideIndex = 0;
  slides: Slide[];

  ngOnInit() {
    this.slides = [
      new Slide("assets/IMG_20200115_190736.jpg", "Rock on!"),
      new Slide("assets/IMG_20200115_224945.jpg", "Mini sex"),
      new Slide("assets/IMG_20181108_194901.jpg", "GES workflows"),
      new Slide("assets/IMG_20190108_132226.jpg", "Quick"),
      new Slide("assets/IMG_0944.jpg", "Burger King"),
      new Slide("assets/IMG_20190719_202038.jpg", "C'est parti"),
      new Slide("assets/180bd992-e4d7-4e1a-8fc0-1981a43001dc.jpg", "♥ Fretjes ♥"),
      new Slide("assets/IMG_20191106_194312.jpg", "Manhattns"),
      new Slide("assets/IMG_20191016_163438.jpg", "Barlok parti"),
      new Slide("assets/IMG_20190828_170855.jpg", "Indian sweets"),
      new Slide("assets/IMG_0873.jpg", "Mon copain... et Vqy"),
      new Slide("assets/IMG_0920.jpg", "Tortilla burger")
    ];
    this.showSlides();
  }

  showSlides() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].isVisible = false;
    }
    
    if (this.slideIndex == this.slides.length) this.slideIndex = 0;
    this.slides[this.slideIndex].isVisible = true;
    this.slideIndex++;
    setTimeout(() => this.showSlides(), 10000);
  }

  plusSlides(n) {
    this.slideIndex += n;
  }

  currentSlide(n) {
    this.slideIndex = n;
  }
}

class Slide {
  constructor(public href: string,
    public title: string,
    public isVisible?: boolean
  ) {
    this.isVisible = false;
  }
}
