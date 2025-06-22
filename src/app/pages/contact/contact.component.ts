import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  constructor(private readonly toastr:ToastrService ){}
  content:FormGroup = new FormGroup({
    fullName:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(30)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    phone:new FormControl(null,[Validators.required,Validators.pattern('^\\+?[0-9]{7,15}$')]),
    message:new FormControl(null,Validators.required)
  })


  submitForm(){
    if(this.content.valid){
      console.log(this.content.value);
      this.toastr.success('نجاح','تم ارسال رسالتكم بنجاح')
      this.content.reset()
    }else{
      this.toastr.error('خطأ','برجاء اكمال البيانات لارسال رسالتكم')
    }
  }

}
