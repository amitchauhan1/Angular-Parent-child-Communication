import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      Say {{ childMsg }}

      <button (click)="sendMessage()">Send Message</button>
  `,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  name: string;
  message = 'I am child';
  @Input() childMsg: string;

  @Output() msgEvent = new EventEmitter<string>();

  constructor() {
    this.name = 'Amit';
  }

  ngOnInit() {
  }
  sendMessage() {
    this.msgEvent.emit(this.message);
  }
}
