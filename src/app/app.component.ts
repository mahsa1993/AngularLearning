import { Component } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-app';

  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
