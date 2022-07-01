import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo.type';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public items: Array<TodoItem> = [
    {id: 1, checked: false, description: 'Erste Angular Applikation erstellen'},
    {id: 2, checked: false, description: 'Todo Komponente erstellen'},
    {id: 3, checked: false, description: 'Todos anzeigen'},
    {id: 4, checked: false, description: 'Todos hinzufügen'},
    {id: 5, checked: false, description: 'Todos erledigen'}
  ];

}
