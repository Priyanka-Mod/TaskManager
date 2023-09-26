import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  savedTask:Array<{name:string , isEditing:boolean, hover: boolean}>=[
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

  onEdit(selectedTask) {
    this.savedTask.forEach((task)=>{
        task.isEditing = false;
    })
    selectedTask.isEditing=true;   
  }

  onDelete(selctedTask){
    this.savedTask =  this.savedTask.filter((task)=> task !== selctedTask)
  }

  updated
  edited(selectedTask) {
    selectedTask.isEditing = false;
  }
}
