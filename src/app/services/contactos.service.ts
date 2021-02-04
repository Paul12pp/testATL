import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Contacto from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) {
    console.log('service ready');
  }
  getContactos() {
    return JSON.parse(localStorage.getItem('contactos'));
  }
  postContacto(contacto: Contacto) {
    const ofLocal = this.getContactos();
    const temp: Contacto[] = ofLocal != null ? ofLocal : [];
    contacto.id = contacto.id === 0 || contacto.id === null
      ? new Date().getMilliseconds()
      : contacto.id;
    temp.push(contacto);
    localStorage.setItem('contactos', JSON.stringify(temp));
  }
  postInitial(contactos: any) {
    localStorage.setItem('contactos', JSON.stringify(contactos));
  }
  deleteContacto(id: number) {
    let temp: Contacto[] = this.getContactos();
    temp = temp.filter((val: any, index: number) => val.id !== id);
    localStorage.setItem('contactos', JSON.stringify(temp));
  }
  getContacto(id: number) {
    const temp: Contacto[] = this.getContactos();
    return temp.find((val: any, index: number) => val.id === id);
  }
  editContacto(id: number, contacto: Contacto) {
    let temp: Contacto[] = this.getContactos();
    temp = temp.map((val: any) => val.id === id ? contacto : val);
    localStorage.setItem('contactos', JSON.stringify(temp));
  }
}
