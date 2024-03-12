import { Component } from '@angular/core';
import { Task } from './task';
import { Profile } from './profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'UmsiziFrontEnd-Angular';
  user: Profile = {
    name: 'Mxolisi Sibaya',
    email: 'mxolisi.gojolo@gmail.com',
  };
  selectedTask: Task | undefined;

  onTaskSelected(task: Task) {
    this.selectedTask = task;
  }

  taskList: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Task 1 description',
      deadline: new Date(),
      priority: 'Low',
      stage: 'Backlog',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Task 2 description',
      deadline: new Date(),
      priority: 'High',
      stage: 'Backlog',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Task 3 description',
      deadline: new Date(),
      priority: 'Mid',
      stage: 'Backlog',
    },
    {
      id: 4,
      title: 'Task 4',
      description: 'Task 4 description',
      deadline: new Date(),
      priority: 'Low',
      stage: 'Complete',
    },
    {
      id: 5,
      title: 'Task 5',
      description: 'Task 5 description',
      deadline: new Date(),
      priority: 'High',
      stage: 'Review',
    },
    {
      id: 6,
      title: 'Task 6',
      description: 'Task 6 description',
      deadline: new Date(),
      priority: 'Mid',
      stage: 'Backlog',
    },
    {
      id: 7,
      title: 'Task 7',
      description: 'Task 7 description',
      deadline: new Date(),
      priority: 'Low',
      stage: 'Backlog',
    },
    {
      id: 8,
      title: 'Task 8',
      description: 'Task 8 description',
      deadline: new Date(),
      priority: 'High',
      stage: 'Testing',
    },
    {
      id: 9,
      title: 'Task 9',
      description: 'Task 9 description',
      deadline: new Date(),
      priority: 'Mid',
      stage: 'In-progress',
    },
  ];
  backlogTasks: Task[] = this.taskList.filter(
    (task) => task.stage.toLowerCase() === 'backlog'
  );
  progressTasks: Task[] = this.taskList.filter(
    (task) => task.stage.toLowerCase() === 'in-progress'
  );
  testingTasks: Task[] = this.taskList.filter(
    (task) => task.stage.toLowerCase() === 'testing'
  );
  reviewTasks: Task[] = this.taskList.filter(
    (task) => task.stage.toLowerCase() === 'review'
  );
  completeTasks: Task[] = this.taskList.filter(
    (task) => task.stage.toLowerCase() === 'complete'
  );

  isFormVisible = false;

  showForm() {
    this.isFormVisible = true;
    console.log(this.isFormVisible);
  }

  hideForm() {
    this.isFormVisible = false;
  }

  addTask(task: Task) {
    // Implement your logic to add task here
    task.id = this.taskList.length + 1;
    this.taskList.push(task);
    console.log(this.taskList);
    this.hideForm();
  }
  closeTaskDetailPopup() {
    this.selectedTask = undefined;
  }
}
