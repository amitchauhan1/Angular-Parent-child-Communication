import { Component } from '@angular/core';
import {NewServiceService } from './new-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [NewServiceService],
})
export class AppComponent {
  title = 'task020120';
}
