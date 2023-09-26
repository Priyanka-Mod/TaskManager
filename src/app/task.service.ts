import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task:string = null
  newTask = new EventEmitter<string>();
  
  constructor() {

  }
  saveTask(task:string){
    this.newTask.emit(task);
  }
}