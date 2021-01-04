import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedHospitalsComponent } from './trusted-hospitals.component';

describe('TrustedHospitalsComponent', () => {
  let component: TrustedHospitalsComponent;
  let fixture: ComponentFixture<TrustedHospitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustedHospitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
