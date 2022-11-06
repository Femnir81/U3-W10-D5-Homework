import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task.class';
import { TasktodoService } from 'src/app/services/tasktodo.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{

  constructor(private tasktodoService: TasktodoService) {}
  
  taskArr: Task[] = this.tasktodoService.taskArr
  
  showTask :boolean = false

  ngOnInit(): void {
    setTimeout(() => {
      this.showTask = true
    }, 2000);
  }

  onRemove(ele: Task) {
    this.tasktodoService.removeTask(ele)
  }

  onChecked(ele: Task) {
    this.tasktodoService.checkedTask(ele)
  }

}
