import { Component, OnInit } from '@angular/core';
import { TasktodoService } from 'src/app/services/tasktodo.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  constructor(private tasktodoService: TasktodoService) { }
  
  task: string = '';

  ngOnInit(): void {
  }

  onAddTask() {
    this.tasktodoService.addTask(this.task);
    this.task = ''
  }

}
