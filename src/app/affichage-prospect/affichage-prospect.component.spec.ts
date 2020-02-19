import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageProspectComponent } from './affichage-prospect.component';

describe('AffichageProspectComponent', () => {
  let component: AffichageProspectComponent;
  let fixture: ComponentFixture<AffichageProspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageProspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
