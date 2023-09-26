import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task:string = null
  newTask = new EventEmitter<string>();
  
  constructor() {

  }

  /*
  *
  * 
  */
  public saveTask(task:string): void {
    this.newTask.emit(task);
  }
}