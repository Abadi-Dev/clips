import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() color = 'blue';

  get bgColor(): string{
    return 'bg-blue-400'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
