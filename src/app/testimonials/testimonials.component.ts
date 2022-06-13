import { Component, OnInit } from '@angular/core';
import { testimonialsModel } from '../models/Testimonials';
import { TestimonialsService } from '../services/Testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor(private testimonialsService:TestimonialsService) { }
   testimonialsList!: testimonialsModel[];
  ngOnInit(): void {
    this.testimonialsService.getTestimonials().subscribe(
    data=>
    {
      debugger;
      this.testimonialsList=data.data;
    }
    )
  }

}
