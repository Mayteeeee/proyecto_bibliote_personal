import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalleslibro } from './detalleslibro';

describe('Detalleslibro', () => {
  let component: Detalleslibro;
  let fixture: ComponentFixture<Detalleslibro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalleslibro],
    }).compileComponents();

    fixture = TestBed.createComponent(Detalleslibro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
