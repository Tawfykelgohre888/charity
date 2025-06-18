import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // ⬅️ استيراد FormsModule

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
    contactForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.http.post('https://formspree.io/f/mkgbzzwe', this.contactForm.value).subscribe({
        next: () => {
          this.successMessage = 'تم إرسال رسالتك بنجاح ✅';
          this.contactForm.reset();
          this.submitted = false;
        },
        error: () => {
          this.errorMessage = 'حدث خطأ أثناء الإرسال ❌';
        }
      });
    }
  }

}
