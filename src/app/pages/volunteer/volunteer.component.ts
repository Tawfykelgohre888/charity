import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { GoogleSheetService } from "../../services/google-sheet.service";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: 'app-volunteer',
  imports: [ReactiveFormsModule],
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'] // ✅ صح كده
})
export class VolunteerComponent {
  constructor(
    private readonly toastr: ToastrService,
    private readonly googleSheet: GoogleSheetService,
    httpClient: HttpClient
  ) {}

  volunteer: FormGroup = new FormGroup({
    fullName: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.pattern('^01[0-2,5]{1}[0-9]{8}$')]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    Volunteering: new FormControl(null, Validators.required),
    message: new FormControl(null)
  });

  submitForm() {
    if (this.volunteer.valid) {
          this.toastr.success('تم إرسال البيانات بنجاح');
          this.volunteer.reset();
    } else {
      this.toastr.error('من فضلك املأ البيانات بشكل صحيح');
    }
  }
}
