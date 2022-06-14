import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() control!: FormControl;
  @Input() label!: string;

  constructor() { }

  ngOnInit(): void {
  }

  // showErrors(){
  //   return this.control!.dirty && this.control!.touched && this.control!.errors
  // }
}