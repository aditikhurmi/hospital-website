import { Component, OnInit } from '@angular/core';
import {GeneralCards} from "src/app/general-cards/general-cards-model";

@Component({
  selector: 'app-general-cards',
  templateUrl: './general-cards.component.html',
  styleUrls: ['./general-cards.component.css']
})
export class GeneralCardsComponent implements OnInit {

 generalCards: GeneralCards[]=[
    new GeneralCards("HOSPITALS","assets/images/49.png"),
    new GeneralCards("NURSING HOMES", "assets/images/30.png"),
    new GeneralCards("DIAGONOSTICS CENTER", "assets/images/6.jpg" ),
    new GeneralCards("DOCTORS","assets/images/38.png"),
    new GeneralCards("PHARMACY", "assets/images/24 - Copy.png"),
    new GeneralCards("BLOOD BANKS", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs5QIMp5FigKlk7blxgAB1K17nainFGqbUvw&usqp=CAU"),
    new GeneralCards("PET CLINICS","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4vdSlv2-5PV49KPvuE2mWfxlLYExTZeES0w&usqp=CAU"),
    new GeneralCards("ISOLATION CENTERS","assets/images/73.png"),
    new GeneralCards("DONATION CAMPS","https://www.nicepng.com/png/detail/101-1012158_jpg-bank-vector-blood-blood-donation-camp-png.png"),
    new GeneralCards("INSURANCE", "assets/images/40.png"),
    new GeneralCards("ORGANIZATIONS","assets/images/Annotation 2020-07-18 103509.png"),
    new GeneralCards("AMBULANCE", "assets/images/ambulance-pngrepo-com.png")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
