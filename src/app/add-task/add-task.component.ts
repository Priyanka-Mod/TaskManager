import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  task:string;
  constructor(private readonly newTaskService:TaskService){
  }
  ngOnInit(): void {}

  
  onSave():void{
    if(!this.task){
      alert("Enter task");
      return;
    }
    this.newTaskService.saveTask(this.task);
    this.task = null;
  }
}
