import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
     Validators.pattern(/\s/)
    ])
  });

  constructor() {
    // console.log(this.cardForm.controls.['name']); // not working
    // console.log(this.cardForm.get('name')); // working fine
  }

  ngOnInit(): void {
  }

  submit(){

  }

}
