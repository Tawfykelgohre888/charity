import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', loadComponent:()=> import('./pages/home/home.component').then(c =>c.HomeComponent ) ,title:"الرئيسيه" },
  { path: 'about', loadComponent:()=> import('./pages/about/about.component').then(c=>c.AboutComponent) ,title:"عن الجمعية" },
  { path: 'contact', loadComponent:()=> import('./pages/contact/contact.component').then(c=>c.ContactComponent),title:"تواصل معنا" },
  { path: 'services',loadComponent:()=> import('./pages/services/services.component').then(c=>c.ServicesComponent),title:"الخدمات" },
  { path: 'volunteer',loadComponent:()=> import('./pages/volunteer/volunteer.component').then(c=>c.VolunteerComponent),title:"التطوع" },
  { path: 'donations',loadComponent:()=> import('./pages/Donations/Donations.component').then(c=>c.DonationsComponent),title:"تبرعات" },
  { path: 'board-Members',loadComponent:()=> import('./pages/boardMembers/boardMembers.component').then(c=>c.BoardMembersComponent),title:"مجلس الاداره " },
];
