import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo.type';
import { FormGroupDirective, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() {
    this.newTodoForm = new FormGroup({
      'description': new FormControl('', Validators.required)
    })
  }

  public newTodoForm: FormGroup;

  ngOnInit(): void {
  }

  public items: Array<TodoItem> = [
    {id: 1, checked: false, description: 'Erste Angular Applikation erstellen'},
    {id: 2, checked: false, description: 'Todo Komponente erstellen'},
    {id: 3, checked: false, description: 'Todos anzeigen'},
    {id: 4, checked: false, description: 'Todos hinzufügen'},
    {id: 5, checked: false, description: 'Todos erledigen'}
  ];

  public onAdd(myForm: FormGroupDirective) {
    if(this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.items.push({
        id: this.items.length + 1,
        description: this.newTodoForm.get('description')?.value,
        checked: false
      })
    }
    this.newTodoForm.reset();
    this.newTodoForm.markAsUntouched();
    myForm.resetForm();
  }

}
