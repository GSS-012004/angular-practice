import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModules } from "src/app/common/common.module";
import { PanelViolationsComponent } from "./panel-violations.component";
import { FireAndSmokeViolationComponent } from './fire-and-smoke-violation/fire-and-smoke-violation.component';
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { TreeSelectModule } from "primeng/treeselect";
const routes:Routes=[{path:'',component:PanelViolationsComponent}]

@NgModule({
    declarations:[PanelViolationsComponent],
    imports:[CommonModules,RouterModule.forChild(routes),NgxDaterangepickerMd,TreeSelectModule],
    exports:[RouterModule]
})
export class PanelViolationsModule{

}