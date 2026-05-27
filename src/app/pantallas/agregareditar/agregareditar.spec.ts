import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agregareditar } from './agregareditar';

describe('Agregareditar', () => {
  let component: Agregareditar;
  let fixture: ComponentFixture<Agregareditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agregareditar],
    }).compileComponents();

    fixture = TestBed.createComponent(Agregareditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
