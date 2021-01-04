import { Component, OnInit } from '@angular/core';
import { NursingHomes } from "src/app/popular-categories/nursing-homes.model"
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  nursinghomes: NursingHomes[]=[
  new NursingHomes("Kohli Nursing Home", "https://images1-fabric.practo.com/kohli-nursing-home-and-maternity-centre-delhi-1453184237-569dd4ed02b61.jpg"),
  new NursingHomes("Kailash Nursing Home", "https://content.jdmagicbox.com/comp/delhi/60/011p2072760/catalogue/kailash-nursing-home-and-eye-care-patel-nagar-delhi-gynaecologist-and-obstetrician-doctors-edgwp.jpg?clr=")
];

  constructor() { }

  ngOnInit(): void {
  }

}
