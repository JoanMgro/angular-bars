import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

//el decorador NgModule contiene en declarations los componentes que componen el modulo,
//en exports se colocan los componentes que pueden comunicarse con el exterior del modulo.
@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports:[
        HeroComponent,
        ListComponent

    ],
    //En imports colocamos los modulos que contienen los *ngIf, for.. etc
    //no basta con importarlos en las cabeceras.
    imports: [
        CommonModule
    ]
}) 
export class HeroesModule{

}