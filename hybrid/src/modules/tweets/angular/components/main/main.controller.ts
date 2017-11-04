import { ItemModel } from "../../model/item-model";

export class MainController {

    constructor() { }

    public onAdd(item: ItemModel): void {
        alert("Added item: " + item.name);
    }

    public onSelect(option): any {
       alert("Selected option: " + option.option);
    }

}