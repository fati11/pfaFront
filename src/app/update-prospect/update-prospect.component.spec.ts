import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProspectComponent } from './update-prospect.component';

describe('UpdateProspectComponent', () => {
  let component: UpdateProspectComponent;
  let fixture: ComponentFixture<UpdateProspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
