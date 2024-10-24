import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotogrammetryPage } from './photogrammetry.page';

describe('PhotogrammetryPage', () => {
  let component: PhotogrammetryPage;
  let fixture: ComponentFixture<PhotogrammetryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotogrammetryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
