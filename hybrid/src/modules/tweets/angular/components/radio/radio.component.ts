import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'radio',
  template: require('./radio.tpl.html'),
  encapsulation: ViewEncapsulation.None
})

export class RadioComponent {

  private cities: [string];

  constructor() {
  }

  ngOnInit() {
    this.cities = ['Minsk','Moscow'];
  }

  public toggle(value: string): void {
    alert(value);
  }

}
