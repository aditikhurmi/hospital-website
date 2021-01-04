import { Component, OnInit } from '@angular/core';
import { Hospitals } from 'src/app/trusted-hospitals/hospitals.model';

@Component({
  selector: 'app-hospitals-list',
  templateUrl: './hospitals-list.component.html',
  styleUrls: ['./hospitals-list.component.css']
})
export class HospitalsListComponent implements OnInit {

  hospitals: Hospitals[]=[
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

  constructor() { }

  ngOnInit(): void {
  }

}
