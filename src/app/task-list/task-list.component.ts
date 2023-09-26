import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from 'src/shared/model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  savedTask:Array<Task>=[
    {name:'Task 1' , isEditing :false, hover: false},
    {name:'Task 2' , isEditing :false, hover: false},
    {name:'Task 3' , isEditing :false, hover: false},
    {name:'Task 4' , isEditing :false, hover: false},
    {name:'Task 5' , isEditing :false, hover: false},
    {name:'Task 6' , isEditing :false, hover: false},
    {name:'Task 7' , isEditing :false, hover: false},
    {name:'Task 8' , isEditing :false, hover: false},
    {name:'Task 9' , isEditing :false, hover: false},
    {name:'Task 10' , isEditing :false, hover: false}];
  constructor(private taskService:TaskService){

  }
  ngOnInit(): void {
    this.taskService.newTask.subscribe(
      (response) => this.savedTask.push({name:response,isEditing:false, hover: false})
    )}

  onEdit(selectedTask: Task):void {
    this.savedTask.forEach((task)=>{
        task.isEditing = false;
    })
    selectedTask.isEditing=true;   
  }

  onDelete(selctedTask: Task):void{
    this.savedTask =  this.savedTask.filter((task)=> task !== selctedTask)
  }


  edited(selectedTask: Task):void {
    selectedTask.isEditing = false;
  }
}
