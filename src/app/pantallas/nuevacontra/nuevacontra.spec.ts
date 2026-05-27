import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nuevacontra } from './nuevacontra';

describe('Nuevacontra', () => {
  let component: Nuevacontra;
  let fixture: ComponentFixture<Nuevacontra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nuevacontra],
    }).compileComponents();

    fixture = TestBed.createComponent(Nuevacontra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
