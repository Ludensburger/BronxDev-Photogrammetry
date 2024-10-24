import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TakeTourPage } from './take-tour.page';

describe('TakeTourPage', () => {
  let component: TakeTourPage;
  let fixture: ComponentFixture<TakeTourPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeTourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
