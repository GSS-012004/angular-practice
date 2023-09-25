import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoErrorComponent } from './todo-error.component';

describe('TodoErrorComponent', () => {
  let component: TodoErrorComponent;
  let fixture: ComponentFixture<TodoErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoErrorComponent]
    });
    fixture = TestBed.createComponent(TodoErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
