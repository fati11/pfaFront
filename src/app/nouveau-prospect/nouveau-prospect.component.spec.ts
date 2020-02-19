import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauProspectComponent } from './nouveau-prospect.component';

describe('NouveauProspectComponent', () => {
  let component: NouveauProspectComponent;
  let fixture: ComponentFixture<NouveauProspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauProspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
