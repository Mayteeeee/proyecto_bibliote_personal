import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mislibros } from './mislibros';

describe('Mislibros', () => {
  let component: Mislibros;
  let fixture: ComponentFixture<Mislibros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mislibros],
    }).compileComponents();

    fixture = TestBed.createComponent(Mislibros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
