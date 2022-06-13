import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WhyUsComponent } from './why-us/why-us.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'AboutUs',component:AboutUsComponent},
   {path:'Why Us',component:WhyUsComponent},
   {path:'Portfolio',component:PortfolioComponent}, 
    {path:'Testimonials',component:TestimonialsComponent},   
     {path:'Team',component:TeamComponent},  
       {path:'OurClients',component:OurClientsComponent},   
  {path:'Contact Us',component:ContactUSComponent},
   {path:'Nav',component:NavComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
