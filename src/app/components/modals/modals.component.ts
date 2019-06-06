import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit , OnDestroy{
  @Input() id: string;
  private element: any;

  constructor(private modalsService: ModalsService, private el: ElementRef) {
    this.element = el.nativeElement;
}

ngOnInit(): void {
  let modal = this;

  // ensure id attribute exists
  if (!this.id) {
      console.error('modal must have an id');
      return;
  }

  // move element to bottom of page (just before </body>) so it can be displayed above everything else
  document.body.appendChild(this.element);

  // close modal on background click
  this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'modal') {
          modal.close();
      }
  });

  // add self (this modal instance) to the modal service so it's accessible from controllers
  this.modalsService.add(this);
}

// remove self from modal service when component is destroyed
ngOnDestroy(): void {
  this.modalsService.remove(this.id);
  this.element.remove();
}

// open modal
open(): void {
  this.element.style.display = 'block';
  document.body.classList.add('modal-open');
}

// close modal
close(): void {
  this.element.style.display = 'none';
  document.body.classList.remove('modal-open');
}
}
