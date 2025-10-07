import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNavigation } from './card-navigation';

describe('CardNavigation', () => {
  let component: CardNavigation;
  let fixture: ComponentFixture<CardNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
