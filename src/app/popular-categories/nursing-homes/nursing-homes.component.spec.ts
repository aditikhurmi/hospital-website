import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingHomesComponent } from './nursing-homes.component';

describe('NursingHomesComponent', () => {
  let component: NursingHomesComponent;
  let fixture: ComponentFixture<NursingHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NursingHomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NursingHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
