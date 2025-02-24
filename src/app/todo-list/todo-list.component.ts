import { Component } from '@angular/core';
import {Todo} from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todos: Todo[] = JSON.parse(localStorage.getItem('todos')!) ?? [];
  errorMessage = '';

  addTodo(todo: string): void {
    if (todo.length <=3) {
      this.errorMessage = 'Zadanie powinno mieć co najmniej 4 znaki';
      return
    }

    this.todos.push({ name: todo, isComplete: false });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }



  clearErrorMessage() {
    this.errorMessage = '';
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((todo, index) => index !== i)
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  changeTodoStatus(index: number) {
    this.todos[index] = {
      ...this.todos[index],
      isComplete: !this.todos[index].isComplete
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
