import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animaltest } from './animaltest';

describe('Animaltest', () => {
  let component: Animaltest;
  let fixture: ComponentFixture<Animaltest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animaltest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animaltest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
