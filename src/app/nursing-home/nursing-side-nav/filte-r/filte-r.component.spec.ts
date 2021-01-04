import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteRComponent } from './filte-r.component';

describe('FilteRComponent', () => {
  let component: FilteRComponent;
  let fixture: ComponentFixture<FilteRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
