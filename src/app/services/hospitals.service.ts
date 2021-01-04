//try using services all the data is available in respective components I was not able to find the glitch

import { Injectable } from '@angular/core';
import { Hospitals } from 'src/app/trusted-hospitals/hospitals.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  constructor() { }

  private hospitals: Hospitals[]=[
    new Hospitals(
      "Reliance Hospital", "https://cdn-blog.credihealth.com/wp-content/uploads/2019/08/Reliance.jpg", "abcd", 1800000000
      ),

    new Hospitals(
      "Fortis Hospital", "https://www.healthcareradius.in/public/images/2019/10/24/fortis-escorts.jpg", "abcd", 1800000000
    ),

    new Hospitals(
      "Max Hospital", "https://www.indiacancersurgerysite.com/logo-images/max-healthcare.jpg", "abcd", 1800000000
    ),
    
    new Hospitals(
      "BLK Hospital", "https://www.blkhospital.com/slider.png", "abcd", 1800000000
    )
];

}
