import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { NavComponent } from './nav/nav.component';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { languageInterceptor } from './interceptors/language.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule } from '@angular/common/http';
import { testimonialsModel } from './models/Testimonials';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    PortfolioComponent,
    TeamComponent,
    ContactUSComponent,
    WhyUsComponent,
    TestimonialsComponent,
    OurClientsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:languageInterceptor,
      multi:true
    },
    HttpClient,    
    testimonialsModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
