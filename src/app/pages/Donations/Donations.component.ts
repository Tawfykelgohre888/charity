import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Donations',
  templateUrl: './Donations.component.html',
  styleUrls: ['./Donations.component.css']
})
export class DonationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  goToDonation() {
  window.open('https://example.com/donation', '_blank');
}


}
