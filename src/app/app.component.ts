import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Profile } from './profile';
import * as jwt from 'jsonwebtoken';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user: Profile | undefined;
  userList: Profile[] | undefined;
  backlogTasks: Task[] | undefined;
  progressTasks: Task[] | undefined;
  testingTasks: Task[] | undefined;
  reviewTasks: Task[] | undefined;
  completeTasks: Task[] | undefined;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    this.http.get<any[]>('http://localhost:3000/getUsers').subscribe(
      (users) => {
        console.log('Users:', users);
        this.userList = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  UmsiziUsers: Profile[] = [];
  title = 'UmsiziFrontEnd-Angular';
  createNewTask(taskData: Task) {
    this.http.post('http://localhost:3000/NewTask', taskData).subscribe(
      (response) => {
        console.log('Task created successfully:', response);
        alert('You have successfully created a new task');

        this.getuserTasks(this.user);
      },
      (error) => {
        console.error('Error creating task:', error);
      }
    );
    return;
  }
  isAuthenticated = false;
  isNotAuthenticated = true;
  getuserTasks(profile: Profile | undefined) {
    const id = profile?.id;
    this.http
      .get<any[]>(`http://localhost:3000/getTasksForUser/${id}`)
      .subscribe(
        (tasks) => {
          console.log('Tasks:', tasks);
          this.taskList = tasks;

          this.backlogTasks = this.taskList?.filter(
            (task) => task.stage.toLowerCase() === 'backlog'
          );
          this.progressTasks = this.taskList?.filter(
            (task) => task.stage.toLowerCase() === 'in-progress'
          );
          this.testingTasks = this.taskList?.filter(
            (task) => task.stage.toLowerCase() === 'testing'
          );
          this.reviewTasks = this.taskList?.filter(
            (task) => task.stage.toLowerCase() === 'review'
          );
          this.completeTasks = this.taskList?.filter(
            (task) => task.stage.toLowerCase() === 'complete'
          );
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
  }
  updateStage(taskData: any) {
    this.http.put('http://localhost:3000/updateStage', taskData).subscribe(
      () => {
        console.log(`Task updated :`);

        this.getuserTasks(this.user);
      },
      (error) => {
        console.error('Error updating task:', error);
      }
    );
  }
  login(profile: Profile) {
    this.user = profile;
    this.getuserTasks(this.user);
    this.isAuthenticated = true;
    this.isNotAuthenticated = false;
  }
  selectedTask: Task | undefined;

  onTaskSelected(task: Task) {
    this.selectedTask = task;
  }
  onStageChanged(task: Task) {
    this.updateStage({ stage: task.stage, id: task.id, title: task.title });
  }

  taskList: Task[] | undefined = [];

  isFormVisible = false;

  showForm() {
    this.isFormVisible = true;
  }

  hideForm() {
    this.isFormVisible = false;
  }

  addTask(task: Task) {
    task.id = this.user ? this.user.id : -1;

    this.createNewTask(task);
    console.log(this.taskList);

    this.hideForm();
  }
  closeTaskDetailPopup() {
    this.selectedTask = undefined;
  }
}
