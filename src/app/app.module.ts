import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ConfigService} from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    GalleryComponent,
    ContentSectionComponent,
    TestimonialsComponent,
    ClientsComponent,
    PricingComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
