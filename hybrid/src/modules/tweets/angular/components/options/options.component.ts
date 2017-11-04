import { OptionsController } from "./options.controller";

export class OptionsComponent implements ng.IComponentOptions {

    public bindings: any;

    constructor() {
        this.bindings = {
            onSelect: '&',
            selected: '<'        
        }
    }

    public controller = OptionsController;
    public template = require('./options.tpl.html');

}
