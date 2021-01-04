import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonosticsRegistrationComponent } from './diagonostics-registration.component';

describe('DiagonosticsRegistrationComponent', () => {
  let component: DiagonosticsRegistrationComponent;
  let fixture: ComponentFixture<DiagonosticsRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagonosticsRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagonosticsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
