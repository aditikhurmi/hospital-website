import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingSideNavComponent } from './nursing-side-nav.component';

describe('NursingSideNavComponent', () => {
  let component: NursingSideNavComponent;
  let fixture: ComponentFixture<NursingSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NursingSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NursingSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
