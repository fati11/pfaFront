import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPopupContactComponent } from './email-popup-contact.component';

describe('EmailPopupContactComponent', () => {
  let component: EmailPopupContactComponent;
  let fixture: ComponentFixture<EmailPopupContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailPopupContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPopupContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
