import { TestBed } from '@angular/core/testing';

import { TuorService } from './tuor.service';

describe('TuorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TuorService = TestBed.get(TuorService);
    expect(service).toBeTruthy();
  });
});
