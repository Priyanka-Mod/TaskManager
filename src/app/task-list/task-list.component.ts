import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from 'src/shared/model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  @ViewChild('taskRef', {static:true}) elementRef: ElementRef;
  savedTask: Array<Task> = [
    { name: 'Task 1', isEditing: false, hover: false },
    { name: 'Task 2', isEditing: false, hover: false },
    { name: 'Task 3', isEditing: false, hover: false },
    { name: 'Task 4', isEditing: false, hover: false },
    { name: 'Task 5', isEditing: false, hover: false },
    { name: 'Task 6', isEditing: false, hover: false },
    { name: 'Task 7', isEditing: false, hover: false },
    { name: 'Task 8', isEditing: false, hover: false },
    { name: 'Task 9', isEditing: false, hover: false },
    { name: 'Task 10', isEditing: false, hover: false }];
  constructor(private taskService: TaskService) {

  }
  // ngAfterViewInit(): void {
  //   console.log(this.elementRef,'ngAfterViewInit');
  // }
  ngOnInit(): void {
    // console.log(this.elementRef,'ngOnInit');
    this.taskService.newTask.subscribe(
      (response) => this.savedTask.push({ name: response, isEditing: false, hover: false })
    )
  }

  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.focus();
  // }
  
  onEdit(selectedTask: Task): void {
    this.savedTask.forEach((task) => {
      task.isEditing = false;
    })
    selectedTask.isEditing = true;
    setTimeout(()=>{
         console.log(document.getElementById("inputTask"))
         document.getElementById("inputTask").focus();
    },0)
    // console.log(this.elementRef,'onEdit');
  }

  onDelete(selctedTask: Task): void {
    if(confirm("Do you want to delete the task?")){
      this.savedTask = this.savedTask.filter((task) => task !== selctedTask)
    }
    else{
      return
    }
    
  }


  edited(selectedTask: Task): void {
    selectedTask.isEditing = false;
  }
}
