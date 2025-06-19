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
  { path: '', component: HomeComponent,title:"home" },
  { path: 'about', component: AboutComponent,title:"about" },
  { path: 'contact', component: ContactComponent,title:"contact" },
  { path: 'services', component: ServicesComponent,title:"services" },
  { path: 'volunteer', component: VolunteerComponent,title:"volunteer" },
  { path: 'Donations', component: DonationsComponent,title:"Donations" },
  { path: 'board-Members', component: BoardMembersComponent,title:"boardMembers " },
  { path: 'footer', component: FooterComponent,title:"footer" },
];
