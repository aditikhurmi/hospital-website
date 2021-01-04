import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/pharmacy/pharmacy.model';
@Component({
  selector: 'app-pharmacy-list',
  templateUrl: './pharmacy-list.component.html',
  styleUrls: ['./pharmacy-list.component.css']
})
export class PharmacyListComponent implements OnInit {

pharmacy: Pharmacy[]=[
  new Pharmacy("MedPlus", "https://www.anderson.ucla.edu/images/2017/sites/faculty/review%20publication/Fall-2019/AR-india-pharmacy-hero.jpg"),
  new Pharmacy("Gayatri Medicos","https://www.carencureqatar.com/medical/image/data/News/new24.jpg")
];

  constructor() { }

  ngOnInit(): void {
  }

}
