import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffairePopupComponent } from './affaire-popup.component';

describe('AffairePopupComponent', () => {
  let component: AffairePopupComponent;
  let fixture: ComponentFixture<AffairePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffairePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffairePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
