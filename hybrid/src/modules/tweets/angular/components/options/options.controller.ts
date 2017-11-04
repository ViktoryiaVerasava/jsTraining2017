import { OptionsModel } from "../../model/options-model";

export class OptionsController {
    public static $inject: Array<string> = ["OptionsModel"];

    onSelect: (string) => any;
    selected: string;

    constructor(public optionsModel: OptionsModel) {
    }

    handleSelect(): void {
        this.onSelect({ option: this.selected });
    }

}