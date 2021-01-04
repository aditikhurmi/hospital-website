import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineConsultancyAdComponent } from './online-consultancy-ad.component';

describe('OnlineConsultancyAdComponent', () => {
  let component: OnlineConsultancyAdComponent;
  let fixture: ComponentFixture<OnlineConsultancyAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineConsultancyAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineConsultancyAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
