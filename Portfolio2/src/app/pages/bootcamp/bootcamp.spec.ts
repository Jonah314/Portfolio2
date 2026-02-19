import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bootcamp } from './bootcamp';

describe('Bootcamp', () => {
  let component: Bootcamp;
  let fixture: ComponentFixture<Bootcamp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bootcamp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bootcamp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
