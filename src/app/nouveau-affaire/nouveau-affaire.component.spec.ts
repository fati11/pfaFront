import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauAffaireComponent } from './nouveau-affaire.component';

describe('NouveauAffaireComponent', () => {
  let component: NouveauAffaireComponent;
  let fixture: ComponentFixture<NouveauAffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauAffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
