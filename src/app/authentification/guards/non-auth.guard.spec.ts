import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { nonAuthGuard } from './non-auth.guard';

describe('nonAuthGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nonAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
