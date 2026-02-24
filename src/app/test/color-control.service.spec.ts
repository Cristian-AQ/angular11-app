import { TestBed } from '@angular/core/testing';

import { ColorControlService } from './color-control.service';

describe('ColorControlService', () => {
  let service: ColorControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
