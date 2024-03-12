import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
})
export class TaskDetailComponent {
  @Input() taskSelected: Task | undefined;
  @Output() close = new EventEmitter<void>();

  closeTask() {
    this.close.emit();
  }
}
