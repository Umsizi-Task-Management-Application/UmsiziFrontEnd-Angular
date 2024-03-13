import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Input() UmsiziUsers: Profile[] | undefined = [];
  @Output() loggedInProfile = new EventEmitter<Profile>();
  email: string = '';
  password: string = '';

  submitLogin() {
    if (this.UmsiziUsers) {
      for (const profile of this.UmsiziUsers) {
        if (profile.email == this.email) {
          console.log(profile);
          const userFound: Profile = {
            id: profile.id,
            email: profile.email,
            name: profile.name,
          };

          this.loggedInProfile.emit(userFound);
        }
      }
    } else {
      console.log('The users list is undefined');
    }

    const element = document.getElementById('response');
    if (element) {
      element.style.color = 'red';
      element.innerText = 'User Not Found. Click Register';
    }
  }
}
