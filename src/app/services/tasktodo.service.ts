import { Injectable } from '@angular/core';
import { Task } from '../classes/task.class';

@Injectable({
  providedIn: 'root'
})
export class TasktodoService {

  taskArr: Task[] = []

  taskArrDone : Task[] =[]

  constructor() { }

  addTask(ele: string) {
    setTimeout(() => {
      let task: Task = new Task(ele);
      this.taskArr.push(task)      
    }, 2000);
  }

  removeTask(ele: Task) {
    setTimeout(() => {
      let index = this.taskArr.indexOf(ele);
      this.taskArr.splice(index, 1)
    }, 2000);
  }

  checkedTask(ele: Task) {
    setTimeout(() => {
      let index = this.taskArr.indexOf(ele);
      this.taskArr.splice(index, 1);
      this.taskArrDone.push(ele);
      ele.completed = true
    }, 2000);
  }
}
