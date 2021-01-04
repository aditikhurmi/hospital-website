import { Component, OnInit, Input } from '@angular/core';
import { Hospitals } from 'src/app/trusted-hospitals/hospitals.model';
import {HospitalsService} from 'src/app/services/hospitals.service';

@Component({
  selector: 'app-trusted-hospitals',
  templateUrl: './trusted-hospitals.component.html',
  styleUrls: ['./trusted-hospitals.component.css'], 
  providers: [HospitalsService]
})
export class TrustedHospitalsComponent implements OnInit {



  constructor(private hospitalsService: HospitalsService) { }

  ngOnInit(): void {
  }

}
