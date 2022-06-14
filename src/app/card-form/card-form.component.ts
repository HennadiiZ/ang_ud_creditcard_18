import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl(null, Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    
  }

}