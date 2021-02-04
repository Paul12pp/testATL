import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactosService } from '../../services/contactos.service';
import Contacto from '../../interfaces/interfaces';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @ViewChild('f') form: any;
  contacto =
    {
      id: 0,
      nombre: '',
      telefono: '',
    };
  contactos: any = [];
  file: any = null;
  constructor(private services: ContactosService) {
  }

  ngOnInit() {
    this.contactos = this.services.getContactos();
    console.log(this.contactos);
  }
  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      this.contacto.id === 0 || this.contacto.id === null
        ? this.services.postContacto(form.value)
        : this.services.editContacto(this.contacto.id, form.value);
      this.contactos = this.services.getContactos();
      console.log(form.value);
      form.resetForm();
    } else {
      console.log('invalid');
    }
  }
  edit(id: number) {
    this.contacto = this.services.getContacto(id);
  }
  delete(id: number) {
    this.services.deleteContacto(id);
    this.contactos = this.services.getContactos();
  }
  handleFileInput(file: any) {
    var reader = new FileReader();
    reader.onload = () => {
      console.log('result', reader.result as string);
      const temp = reader.result as string;
      console.log(temp);
      const contacto = JSON.parse(reader.result as string);
      this.services.postInitial(contacto);
      this.contactos = this.services.getContactos();
    };
    reader.readAsText(file);
  }
}
