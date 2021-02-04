import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;
  @Input() value: string;
  constructor() { }

  ngOnInit() {
    
  }

}
