import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-Donations',
  templateUrl: './Donations.component.html',
  styleUrls: ['./Donations.component.css'],
  imports:[FormsModule,CommonModule],
  standalone:true
})
export class DonationsComponent   {
selectedFile: File | null = null;


  onPaymentMethodChange(event:Event){
    const selected = (event.target as HTMLSelectElement ).value

   if (selected === 'vodafone') {
    const modal = new (window as any).bootstrap.Modal(document.getElementById('vodafoneModal'));
    modal.show();
  } else if (selected === 'instapay') {
    const modal = new (window as any).bootstrap.Modal(document.getElementById('instapayModal'));
    modal.show();
  }
  }


  onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}


submitDonation(method: string) {
  if (!this.selectedFile) {
    alert("من فضلك ارفع صورة الدفع");
    return;
  }

  const name = (document.getElementById('donorName') as HTMLInputElement)?.value;
  const amount = (document.getElementById('amount') as HTMLInputElement)?.value;
  const notes = (document.getElementById('notes') as HTMLTextAreaElement)?.value;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('amount', amount);
  formData.append('notes', notes);
  formData.append('method', method);
  formData.append('screenshot', this.selectedFile!);

  // ممكن ترسلها لـ API هنا

  console.log("البيانات المجمعة:", formData);

  alert("✅ تم استلام التبرع، سيتم التواصل معك");

  // قفل المودال
  const modalEl = document.getElementById(method + 'Modal');
  const modal = (window as any).bootstrap.Modal.getInstance(modalEl);
  modal.hide();
}


}
