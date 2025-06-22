import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DonationsComponent } from './pages/Donations/Donations.component';
import { BoardMembersComponent } from './pages/boardMembers/boardMembers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent,title:"الرئيسيه" },
  { path: 'about', component: AboutComponent,title:"عن الجمعية" },
  { path: 'contact', component: ContactComponent,title:"تواصل معنا" },
  { path: 'services', component: ServicesComponent,title:"الخدمات" },
  { path: 'volunteer', component: VolunteerComponent,title:"التطوع" },
  { path: 'donations', component: DonationsComponent,title:"تبرعات" },
  { path: 'board-Members', component: BoardMembersComponent,title:"مجلس الاداره " },
];
