import { NgModule }                from '@angular/core';
import { Routes, RouterModule }    from '@angular/router';
import { IntroductionComponent }   from './introduction/introduction.component';
import { GalleryComponent }        from './gallery/gallery.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { TestimonialsComponent }   from './testimonials/testimonials.component';
import { ClientsComponent }        from './clients/clients.component';
import { PricingComponent }        from './pricing/pricing.component';
import { HeaderComponent }         from './header/header.component';


const routes: Routes = [
  {path:'',             component: HeaderComponent},
  {path:'Home',         component: HeaderComponent},
  {path:'About',        component: IntroductionComponent},
  {path:'Services',     component: ContentSectionComponent},
  {path:'Testimonials', component: TestimonialsComponent},
  {path:'Gallery',      component: GalleryComponent},
  {path:'Clients',      component: ClientsComponent},
  {path:'Pricing',      component: PricingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
