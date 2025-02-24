import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  standalone: false,
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent {
  @Output() addTodo = new EventEmitter<string>();

  addNewTodo(todoName: string) {
    this.addTodo.emit(todoName);
  }
}
