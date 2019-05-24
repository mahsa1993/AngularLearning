import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Form } from '@angular/forms';
// import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 message = 'Hello . error occured .. blah blah blah';
  users: User[] = [];
  user: User = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
     street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  };
  // ac: AppComponent = new AppComponent();
  constructor(
    private userSv: UserService,
    // public modalRef: BsModalRef
    ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
     this.userSv.getuser().subscribe(
       response => {
         this.users = response;
       }
     );
  }
  updateUser(userid: number) {
    debugger;
    this.userSv.updateUser(this.user, userid);
    this.getUser();
  }

}
