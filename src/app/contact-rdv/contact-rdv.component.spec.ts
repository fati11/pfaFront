import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRdvComponent } from './contact-rdv.component';

describe('ContactRdvComponent', () => {
  let component: ContactRdvComponent;
  let fixture: ComponentFixture<ContactRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
