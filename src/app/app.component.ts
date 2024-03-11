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
  task: Task | undefined;

  taskList: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      deadline: new Date(),
      priority: 'Low',
      stage: 'Backlog',
    },
    {
      id: 2,
      title: 'Task 2',
      deadline: new Date(),
      priority: 'High',
      stage: 'Backlog',
    },
    {
      id: 3,
      title: 'Task 3',
      deadline: new Date(),
      priority: 'Mid',
      stage: 'Backlog',
    },
    {
      id: 4,
      title: 'Task 4',
      deadline: new Date(),
      priority: 'Low',
      stage: 'Complete',
    },
    {
      id: 5,
      title: 'Task 5',
      deadline: new Date(),
      priority: 'High',
      stage: 'Review',
    },
    {
      id: 6,
      title: 'Task 6',
      deadline: new Date(),
      priority: 'Mid',
      stage: 'Backlog',
    },
    {
      id: 7,
      title: 'Task 7',
      deadline: new Date(),
      priority: 'Low',
      stage: 'Backlog',
    },
    {
      id: 8,
      title: 'Task 8',
      deadline: new Date(),
      priority: 'High',
      stage: 'Testing',
    },
    {
      id: 9,
      title: 'Task 9',
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
}
