import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
//Decorador para comunicar de hijo a padre.
//Se debe crear una instancia de tipo EventEmitter<tipo de lo que va a emitir>
//y el padre lo recibe con un atributo entre (-aca instancia-) = aca una funcion en el padre con un parametro 
//especial llamado $event. function($event).
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void{
    console.log(this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.character = {name: '', power: 0};

  }

}
