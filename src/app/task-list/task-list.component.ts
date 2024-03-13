import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] | undefined = [];
  @Input() backlogTasksList: Task[] | undefined = [];
  @Input() progressTasksList: Task[] | undefined = [];
  @Input() testingTasksList: Task[] | undefined = [];
  @Input() reviewTasksList: Task[] | undefined = [];
  @Input() completeTasksList: Task[] | undefined = [];
  @Output() taskSelected = new EventEmitter<Task>();
  @Output() updateStage = new EventEmitter<Task>();

  selectTask(task: Task) {
    this.taskSelected.emit(task);
  }

  constructor() {}

  ngOnInit(): void {}

  getTasks(): void {}

  updateTaskStage(task: Task, newStatus: string): void {
    task.stage = newStatus;
    this.updateStage.emit(task);
  }

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
