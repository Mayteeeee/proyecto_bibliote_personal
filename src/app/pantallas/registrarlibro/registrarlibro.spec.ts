import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrarlibro } from './registrarlibro';

describe('Registrarlibro', () => {
  let component: Registrarlibro;
  let fixture: ComponentFixture<Registrarlibro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registrarlibro],
    }).compileComponents();

    fixture = TestBed.createComponent(Registrarlibro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
