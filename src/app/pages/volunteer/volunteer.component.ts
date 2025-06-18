import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  imports: [],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent {
  formData = {
    name: '',
    phone: '',
    type: '',
    message: '',
  };
   submitted = false;

  onSubmit() {
    console.log('تم الإرسال:', this.formData);

    // هنا ممكن تبعتها لسيرفر أو تخزنها محليًا
    this.submitted = true;

    // نفضي النموذج بعد الإرسال
    this.formData = {
      name: '',
      phone: '',
      type: '',
      message: '',
    };
  }
}
