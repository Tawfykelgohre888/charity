import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare var bootstrap: any;

@Component({
  selector: 'app-Donations',
  templateUrl: './Donations.component.html',
  styleUrls: ['./Donations.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true
})
export class DonationsComponent {
  constructor(private readonly toaster:ToastrService ){}

payMent: FormGroup = new FormGroup({
  fullName: new FormControl(null, [
    Validators.required,
    Validators.minLength(3)
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



  submit(){
    if(this.payMent.valid){
      this.toaster.success('تم التبرع بنجاح! شكراً لمساهمتك، تبرعك يغيّر حياة 💚');
      this.payMent.reset();
    }
  }


  showReceipt = false;
  selectedFile: File | null = null;

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

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
