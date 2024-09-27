import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavBarComponent,
    HeroSectionComponent,
    ServicesComponent,
    TestimonialComponent,
    OurStoryComponent,
    WhyChooseUsComponent,
    CaseStudiesComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
