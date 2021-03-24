import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digitalHamster';

  motorbikes: any = [
    {
      motoName : 'scooter',
      cardsNum : 5
    },
    {
      motoName : 'adventure',
      cardsNum : 4
    },
    {
      motoName : 'street',
      cardsNum : 2
    },
    {
      motoName : 'supersport',
      cardsNum : 2
    }
  ];

  modalTitle: string;
  contactForm: FormGroup;


  ngOnInit() {
    this.contactForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  cardsCounter(i: number) {
    return new Array(i);
  }

  sendAction(str: string) {
    if(str == 'llamar') {
      this.modalTitle = 'Llamadme gratis';
    }
    if(str == 'cita') {
      this.modalTitle = 'Pedir cita previa';
    }
  }

  saveForm() {
    let nombre = this.contactForm.get('nombre').value;
    let apellidos = this.contactForm.get('apellidos').value;
    let telefono = this.contactForm.get('telefono').value;
    let email = this.contactForm.get('email').value;

    alert(nombre + ' ' + apellidos + ' ' + telefono + ' ' + email);
  }
}

