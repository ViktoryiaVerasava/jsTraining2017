import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'css-carousel',
    template: `
 <div class="carousel">

  <ul class="slides" [ngClass]="{'back': transition}"
                     [ngStyle]="{'left':leftShift, 'width':slidwsWidth}">

    <li *ngFor="let image of images" [ngStyle]="{'width':itemWidth}">
      <h2>{{image.title}}</h2>
      <img src="{{image.url}}" alt="">
    </li>

  </ul>

</div>
<button (click)="back()"><</button>
<button (click)="forward()">></button>
  `,
    styles: [`
.carousel{
    overflow:hidden;
    width:500px;
}
.slides{
    list-style:none;
    position:relative;  
    overflow:hidden; 
}

.forwards{      
    transition: 1000ms left;
}
ul {
    padding: 0;
}

.back{       
    transition: 1000ms left;
}

.slides > li{
    position:relative;
    float:left;  
}
.carousel img{
    display:block;
    width:100%;
    max-width:500px;
}
.carousel h2{
    margin-bottom: 0;
    font-size:1em;
    padding:1.5em 0.5em 1.5em 0.5em;
    position:absolute;
    right:0px;
    bottom:0px;
    left:0px;
    text-align:center;
    color:#fff;
    background-color:rgba(0,0,0,0.75);
    text-transform: uppercase;
}


  `],
    encapsulation: ViewEncapsulation.None
})

export class CSSCarouselComponent {

    constructor() {
        this.images = IMAGES;
        this.slidwsWidth = `${this.images.length * 100}%`;
        this.itemWidth = `${100 / this.images.length}%`;
    }

    back() {

        if (this.lastDirection !== 'forward') {
            this.transition = false;
            this.images = this.images.map((v, i, arr) => {
                console.log(v);
                return (i !== 0) ? arr[i - 1] : arr[arr.length - 1];
            });
        }

        console.log(this.images);
        this.shift = 100;
        this.leftShift = `-${this.shift}%`;

        setTimeout(() => {
            this.transition = true;
            this.shift = 0;
            this.leftShift = `${this.shift}%`;
            this.lastDirection = ''
        }, 10);

    }

    forward() {
        if (this.lastDirection === 'forward') {
            this.transition = false;
            this.images = this.images.map((v, i, arr) => {
                console.log(v);
                return (i < arr.length - 1) ? arr[i + 1] : arr[0];

            });
        }
        console.log(this.images);
        this.shift = 0;
        this.leftShift = `${this.shift}%`;

        setTimeout(() => {
            this.transition = true;
            this.shift = 100;
            this.leftShift = `-${this.shift}%`;
            this.lastDirection = 'forward'
        }, 10);

    }


    images: any[];  
    shift: number = 0;
    leftShift: string = "0";
    transition: boolean = true;
    lastDirection: string = '';
    slidwsWidth: string = '500%';
    itemWidth: string = '20%'
}

const IMAGES: any[] = [
    { "title": "1", "url": "https://cdn.pixabay.com/photo/2018/01/21/23/16/cat-3097768__340.jpg" },
    { "title": "2", "url": "https://cdn.pixabay.com/photo/2017/04/04/14/29/cat-2201460__340.jpg" },
    { "title": "3", "url": "https://cdn.pixabay.com/photo/2018/01/21/23/16/cat-3097768__340.jpg" },
    { "title": "4", "url": "https://cdn.pixabay.com/photo/2017/04/04/14/29/cat-2201460__340.jpg" },
    { "title": "5", "url": "https://cdn.pixabay.com/photo/2018/01/21/23/16/cat-3097768__340.jpg" },
    { "title": "6", "url": "https://cdn.pixabay.com/photo/2017/04/04/14/29/cat-2201460__340.jpg" }
];
