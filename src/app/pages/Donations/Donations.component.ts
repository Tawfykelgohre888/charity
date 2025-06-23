import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GoogleSheetService } from '../../services/google-sheet.service';
declare var bootstrap: any;

@Component({
  selector: 'app-Donations',
  templateUrl: './Donations.component.html',
  styleUrls: ['./Donations.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true
})
export class DonationsComponent {
  constructor(
    private readonly toaster: ToastrService,
    private readonly googleSheet: GoogleSheetService
  ) {}

  // ✅ الفورم بعد إضافة رقم الهاتف
  payMent: FormGroup = new FormGroup({
    fullName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)  // رقم موبايل مصري
    ]),
    DonationValue: new FormControl(null, [
      Validators.required,
      Validators.min(1)
    ]),
    PaymentMethod: new FormControl(null, [
      Validators.required
    ]),
    imageDonation: new FormControl(null, [
      Validators.required
    ]),
    message: new FormControl(null, [
      Validators.maxLength(200)
    ])
  });

  // ✅ الحالة
  loading: boolean = false;
  showReceipt = false;
  selectedFile: File | null = null;
  successMessage: string = '';
  errorMessage: string = '';

  // ✅ إرسال البيانات
  submitForm() {
    if (this.payMent.invalid) {
      this.errorMessage = 'من فضلك تأكد من ملء كل الحقول بشكل صحيح.';
      this.successMessage = '';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    // إرسال للـ Google Sheets
    this.googleSheet.sendDonationData(this.payMent.value).subscribe({
      next: () => {
        this.toaster.success('شكراً لتبرعك!');
        this.successMessage = 'تم إرسال التبرع بنجاح. شكرًا لدعمك ❤️';
        this.loading = false;
        this.payMent.reset();
      },
      error: (err) => {
        console.error('💥 خطأ أثناء الإرسال:', err);
        this.toaster.error('حدث خطأ أثناء إرسال التبرع. برجاء المحاولة لاحقاً.');
        this.errorMessage = 'حدث خطأ أثناء الإرسال. برجاء المحاولة لاحقًا.';
        this.loading = false;
      }
    });
  }

  // ✅ فتح مودال الدفع
  openPaymentModal(event: any) {
    const method = event.target.value;
    let modalId = '';

    if (method === 'vodafone') {
      modalId = 'vodafoneModal';
      this.showReceipt = true;
    } else if (method === 'instapay') {
      modalId = 'instapayModal';
      this.showReceipt = true;
    } else {
      this.showReceipt = false;
    }

    if (modalId) {
      const modal = new bootstrap.Modal(document.getElementById(modalId)!);
      modal.show();
    }
  }

  // ✅ رفع صورة الإيصال
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
