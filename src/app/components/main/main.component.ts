import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Form } from '@angular/forms';
// import { BsModalRef } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalsComponent } from '../modals/modals.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 message = 'Hello . error occured .. blah blah blah';
 modalRef: BsModalRef;
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
    private modalService: BsModalService,
    private userSv: UserService
    // public modalRef: BsModalRef
    ) { }  
     
  ngOnInit() {
    this.getUser();
  }

  getUser() {
     this.userSv.getuser()
     .subscribe( data => this.users = data);  
  }
  updateUser(userid: number) {
    this.userSv.updateUser(this.user, userid);
    this.getUser();
  }
  openModal() {
    this.modalRef = this.modalService.show(ModalsComponent, {
      initialState: {
        title: 'Modal title',
        data: {}
      }
    });
  }
}
