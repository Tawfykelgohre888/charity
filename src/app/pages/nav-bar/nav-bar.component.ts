import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  scroll:boolean = false;
  @HostListener('window:scroll') onscroll(){

    if(scrollY > 0){
      this.scroll = true
    }else{
      this.scroll = false
    }

  }
}
