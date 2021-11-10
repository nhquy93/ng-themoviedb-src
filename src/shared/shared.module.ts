import { NgModule } from "@angular/core";
import { ButtonModule } from "./components/button/button.module";
import { ModalModule } from "./components/modal/modal.module";

const modules = [
    ModalModule,
    ButtonModule
];

@NgModule({
    imports: [
        ...modules,
    ],
    exports: [
        ...modules
    ]
})

export class SharedModule { }