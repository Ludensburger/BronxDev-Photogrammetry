import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogonPage } from './logon.page';

describe('LogonPage', () => {
  let component: LogonPage;
  let fixture: ComponentFixture<LogonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
