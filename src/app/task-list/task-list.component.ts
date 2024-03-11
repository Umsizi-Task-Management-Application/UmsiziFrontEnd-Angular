// task-list.component.ts
import { Component, Input, OnInit } from '@angular/core';
// import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] = [];
  @Input() backlogTasksList: Task[] = [];
  @Input() progressTasksList: Task[] = [];
  @Input() testingTasksList: Task[] = [];
  @Input() reviewTasksList: Task[] = [];
  @Input() completeTasksList: Task[] = [];

  // constructor(private taskService: TaskService) { }
  constructor() {}

  ngOnInit(): void {
    // this.getTasks();
  }

  getTasks(): void {}

  getPriorityColor(priority: string): string {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'red'; 
      case 'mid':
        return 'yellow'; 
      case 'low':
        return 'green'; 
      default:
        return 'bisque'; 
    }
  }
}
