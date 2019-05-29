import { TestBed } from '@angular/core/testing';

import { Posts1Service } from './posts1.service';

describe('Posts1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Posts1Service = TestBed.get(Posts1Service);
    expect(service).toBeTruthy();
  });
});
