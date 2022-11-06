import { Component, OnInit } from '@angular/core';
import { Task } from '../classes/task.class';
import { TasktodoService } from '../services/tasktodo.service';

@Component({
  templateUrl: './completati.page.html',
  styleUrls: ['./completati.page.scss']
})
export class CompletatiPage implements OnInit {

  constructor(private tasktodoService: TasktodoService) { }
  
  taskArrDone: Task[] = this.tasktodoService.taskArrDone
  
  showTask :boolean = false

  ngOnInit(): void {
    setTimeout(() => {
      this.showTask = true
    }, 2000);
  }

}
