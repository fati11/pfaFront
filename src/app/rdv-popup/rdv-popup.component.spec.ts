import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvPopupComponent } from './rdv-popup.component';

describe('RdvPopupComponent', () => {
  let component: RdvPopupComponent;
  let fixture: ComponentFixture<RdvPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
