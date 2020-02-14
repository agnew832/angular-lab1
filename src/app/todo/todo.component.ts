import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  //properties
  todoArr: Todo[] = [
    { task: "Cook dinner", completed: true },
    { task: "Finish Angular lab", completed: false },
    { task: "Study for assessment 4", completed: false }  ,
    { task: "Finish resume", completed: true },
    { task: "Netflix and Chill", completed: false }
  ];
  //constructor
  constructor() {
    
  }
  //methods
  ngOnInit(): void {}
}
