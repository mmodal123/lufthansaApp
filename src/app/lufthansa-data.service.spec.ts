import { TestBed } from '@angular/core/testing';

import { LufthansaDataService } from './lufthansa-data.service';

describe('LufthansaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LufthansaDataService = TestBed.get(LufthansaDataService);
    expect(service).toBeTruthy();
  });
});
