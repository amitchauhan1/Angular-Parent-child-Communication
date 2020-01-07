import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: `
    Message {{message}}
    <app-child [childMsg]='parentMsg' (msgEvent)='reciveEvent($event)'></app-child>
    Parent Message {{pmessage}}
  `,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {
  parentMsg = 'Im from parent';
  message: string;
  pmessage: string;

  @ViewChild(ChildComponent, { static: false }) child;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.message = this.child.name;
  }

  reciveEvent($event) {
    this.pmessage = $event;
    console.log($event);
  }
}
