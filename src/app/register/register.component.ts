import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  @Output() loginTrigger = new EventEmitter<void>();
  @Output() registerTrigger = new EventEmitter<User>();
  email: string = '';
  name: string = '';

  login() {
    this.loginTrigger.emit();
  }
  register() {
    this.registerTrigger.emit({ email: this.email, name: this.name });
  }
}
