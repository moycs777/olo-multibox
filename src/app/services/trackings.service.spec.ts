import { TestBed, inject } from '@angular/core/testing';

import { TrackingsService } from './trackings.service';

describe('TrackingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackingsService]
    });
  });

  it('should be created', inject([TrackingsService], (service: TrackingsService) => {
    expect(service).toBeTruthy();
  }));
});
