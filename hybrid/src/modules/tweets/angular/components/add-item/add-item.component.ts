import { Component, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { ItemModel } from "../../model/item-model";

@Component({
  selector: 'add-item',
  template: require('./add-item.tpl.html'),
  encapsulation: ViewEncapsulation.None
})

export class AddItemComponent {

  @Input() option: string;
  @Output() added = new EventEmitter<Object>();

  protected newItem: ItemModel;
  private categories: String[];

  constructor() {
    this.categories = ["Red", "Gray", "Blue"];
  }

  ngOnInit() {
    this.newItem = new ItemModel();
  }

  public addNewItem(): void {
    this.added.emit(this.newItem);
    alert(this.option);
  }

}
