import { Component } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit(){
    if(this.registerForm.valid){
      console.log('Reg success');
      return;
    }
    this.registerForm.markAllAsTouched();
  }
}
