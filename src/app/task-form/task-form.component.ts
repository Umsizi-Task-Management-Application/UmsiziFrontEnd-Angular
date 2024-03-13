import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output() formSubmit = new EventEmitter<Task>();
  @Output() cancelForm = new EventEmitter<void>();

  title: string = '';
  description: string = '';
  deadline: Date = new Date();
  priority: string = '';
  stage: string = '';

  submitForm() {
    if (new Date(this.deadline) <= new Date()) {
      alert('Please select a date and time in the future.');
      return;
    }
    const task: Task = {
      id: 0,
      title: this.title,
      description: this.description,
      deadline: this.deadline,
      priority: this.priority,
      stage: 'Backlog',
    };

    this.formSubmit.emit(task);
    this.resetForm();
  }

  cancel() {
    this.cancelForm.emit();
    this.resetForm();
  }

  private resetForm() {
    this.title = '';
    this.deadline = new Date();
    this.priority = '';
    this.stage = '';
  }
}
