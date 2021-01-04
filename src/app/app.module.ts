import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeJumbotronComponent } from './home-jumbotron/home-jumbotron.component';
import { GeneralCardsComponent } from './general-cards/general-cards.component';
import { TrustedHospitalsComponent } from './trusted-hospitals/trusted-hospitals.component';
import { PopularCategoriesComponent } from './popular-categories/popular-categories.component';
import { HospitalListComponent } from './trusted-hospitals/hospital-list/hospital-list.component';
import { NursingHomesComponent } from './popular-categories/nursing-homes/nursing-homes.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PharmacyListComponent } from './pharmacy/pharmacy-list/pharmacy-list.component';
import { OnlineConsultancyAdComponent } from './online-consultancy-ad/online-consultancy-ad.component';
import { FooterComponent } from './footer/footer.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { SideNavComponent } from './hospitals/side-nav/side-nav.component';
import { SearchBarComponent } from './hospitals/side-nav/search-bar/search-bar.component';
import { CustomerCareComponent } from './hospitals/side-nav/customer-care/customer-care.component';
import { FilterComponent } from './hospitals/side-nav/filter/filter.component';
import { HospitalsListComponent } from './hospitals/hospitals-list/hospitals-list.component';
import { LoginComponent } from './login/login.component';
import { HospitalRegistrationComponent } from './hospital-registration/hospital-registration.component';
import { DiagonosticsRegistrationComponent } from './diagonostics-registration/diagonostics-registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ImageComponent } from './login/image/image.component';
import { FormComponent } from './login/form/form.component';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { NursingHomeComponent } from './nursing-home/nursing-home.component';
import { DescriptionComponent } from './nursing-home/description/description.component';
import { NursingSideNavComponent } from './nursing-home/nursing-side-nav/nursing-side-nav.component';
import { CustCareComponent } from './nursing-home/nursing-side-nav/cust-care/cust-care.component';
import { FilteRComponent } from './nursing-home/nursing-side-nav/filte-r/filte-r.component';
import { SearchBoxComponent } from './nursing-home/nursing-side-nav/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeJumbotronComponent,
    GeneralCardsComponent,
    TrustedHospitalsComponent,
    PopularCategoriesComponent,
    HospitalListComponent,
    NursingHomesComponent,
    PharmacyComponent,
    PharmacyListComponent,
    OnlineConsultancyAdComponent,
    FooterComponent,
    HospitalsComponent,
    SideNavComponent,
    SearchBarComponent,
    CustomerCareComponent,
    FilterComponent,
    HospitalsListComponent,
    LoginComponent,
    HospitalRegistrationComponent,
    DiagonosticsRegistrationComponent,
    ContactUsComponent,
    ImageComponent,
    FormComponent,
    NursingHomeComponent,
    DescriptionComponent,
    NursingSideNavComponent,
    CustCareComponent,
    FilteRComponent,
    SearchBoxComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
