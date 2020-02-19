import { TestBed } from '@angular/core/testing';

import { ProspectService } from './prospect.service';

describe('ProspectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProspectService = TestBed.get(ProspectService);
    expect(service).toBeTruthy();
  });
});
