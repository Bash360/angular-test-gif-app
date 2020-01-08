import { TestBed } from '@angular/core/testing';

import { GifServiceService } from './gif-service.service';

describe('GifServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GifServiceService = TestBed.get(GifServiceService);
    expect(service).toBeTruthy();
  });
});
