import * as angular from "angular";

import { MainComponent } from "./components/main/main.component";
import { OptionsComponent } from "./components/options/options.component";
import { OptionsModel } from "./model/options-model";

angular.module("app.ng1", [])
  .service("OptionsModel", OptionsModel)
  .component("main", new MainComponent())
  .component("options", new OptionsComponent());

