import { Component, OnInit, InputDecorator, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() tabTitle : String = ''; // for the title of the tab
  @Input() active : boolean = false; // if the tab is active then we will render the content
  constructor() { }
  ngOnInit(): void {
  }

}
