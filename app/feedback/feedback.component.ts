import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent  implements OnInit {
  constructor(private fb: FormBuilder) {}
 
  jobForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    contacts: this.fb.group({
      contactType: ['-1'],
      email: [''],
      phone: [''],
    }),
    });
 
  preview: string = '';
 
  ngOnInit(): void {}
 
  save() {
    this.preview = JSON.stringify(this.jobForm.value);
  }
}