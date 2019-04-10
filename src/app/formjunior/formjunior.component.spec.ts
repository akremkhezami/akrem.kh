import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormjuniorComponent } from './formjunior.component';

describe('FormjuniorComponent', () => {
  let component: FormjuniorComponent;
  let fixture: ComponentFixture<FormjuniorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormjuniorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormjuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
