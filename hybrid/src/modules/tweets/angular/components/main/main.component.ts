import { MainController } from "./main.controller";

export class MainComponent implements ng.IComponentOptions {
    public controller: any = MainController;
    public template = require('./main.tpl.html');

}
