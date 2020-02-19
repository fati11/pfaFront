import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesEmailsComponent } from './mes-emails.component';

describe('MesEmailsComponent', () => {
  let component: MesEmailsComponent;
  let fixture: ComponentFixture<MesEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesEmailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
