import { TestBed } from '@angular/core/testing';

import { Common1Interceptor } from './common1.interceptor';

describe('Common1Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Common1Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Common1Interceptor = TestBed.inject(Common1Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
