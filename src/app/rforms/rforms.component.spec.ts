import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RformsComponent } from './rforms.component';

describe('RformsComponent', () => {
  let component: RformsComponent;
  let fixture: ComponentFixture<RformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RformsComponent]
    });
    fixture = TestBed.createComponent(RformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
