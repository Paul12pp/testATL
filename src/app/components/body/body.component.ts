import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @ViewChild('f') form: any;
  id = 0;
  nombre = '';
  telefono = '';
  constructor(private services: ContactosService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(form);
  }
}
