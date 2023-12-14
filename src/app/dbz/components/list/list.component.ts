import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  //este decorador nos permite que el padre envie informacion al hijo. en este caso
  //si input es vacio, el padre entre los tags utiliza [propiedad] o el nombre especificado dentroe del @input(nombre)
  @Input()
  public characterList: Character[] = [{
    // id: '0',
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  emitDeletedCharacterId(id?:string):void{
    //TODO: emitir el ID del personaje
    if(!id) return;
    
    this.onDeleteCharacter.emit(id);
    console.log(id);
  }

}
