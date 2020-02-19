import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageContactComponent } from './affichage-contact.component';

describe('AffichageContactComponent', () => {
  let component: AffichageContactComponent;
  let fixture: ComponentFixture<AffichageContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
