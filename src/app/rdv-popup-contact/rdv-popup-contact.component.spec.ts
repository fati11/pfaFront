import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvPopupContactComponent } from './rdv-popup-contact.component';

describe('RdvPopupContactComponent', () => {
  let component: RdvPopupContactComponent;
  let fixture: ComponentFixture<RdvPopupContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvPopupContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvPopupContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
