import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GoogleSheetService } from '../../services/google-sheet.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  constructor(private readonly toastr:ToastrService,private readonly googleSheet:GoogleSheetService){}
  content:FormGroup = new FormGroup({
    fullName:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(30)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    phone:new FormControl(null,[Validators.required,Validators.pattern('^\\+?[0-9]{7,15}$')]),
    message:new FormControl(null,Validators.required)
  })


  submitForm(){
    this.googleSheet.sendContentData(this.content.value).subscribe({
      next:(res)=>{
        // console.log(res);
        this.toastr.success('تم ارسال الرساله بنجاح سيتم التواصل معك خلاال 24 ساعه')
        this.content.reset();
      },error:(err)=>{
        this.toastr.error('حدث خطأ اثناء ارسال الرساله')
        console.log(err);

      }
    })
  }

}
