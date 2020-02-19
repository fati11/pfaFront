import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauProductComponent } from './nouveau-product.component';

describe('NouveauProductComponent', () => {
  let component: NouveauProductComponent;
  let fixture: ComponentFixture<NouveauProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
