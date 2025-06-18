import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [RouterLink,]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  currentYear: number = new Date().getFullYear();


}
