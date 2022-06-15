import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control'
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // Validators.pattern(/\s/)
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // Validators.pattern(/\s/)
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.minLength(3),
      // Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // Validators.pattern(/\s/)
    ])
  });

  constructor() {
    // console.log(this.cardForm.controls.['name']); // not working
    // console.log(this.cardForm.get('name')); // working fine
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("form was submitted");
    // console.log("Card Form controls", this.cardForm.controls);
    this.cardForm.reset();
  }

  onReset(){
    // console.log("controls-name", this.cardForm.controls['name'].value);
    // console.log("controls-cardNumber", this.cardForm.controls['cardNumber'].value);
    // console.log("controls-expiration", this.cardForm.controls['expiration'].value);
    // console.log("controls-securityCode", this.cardForm.controls['securityCode'].value);

    this.cardForm.reset();
  }

  //=========// Section 19: Simple Data Entry with Template Forms:
  email!: string;

  submit(){
    console.log(this.email)
  }

}
