import { TestBed } from '@angular/core/testing';

import { PeppaPigService } from './peppa-pig.service';

describe('PeppaPigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeppaPigService = TestBed.get(PeppaPigService);
    expect(service).toBeTruthy();
  });
});
