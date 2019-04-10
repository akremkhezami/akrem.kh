import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteadyComponent } from './steady.component';

describe('SteadyComponent', () => {
  let component: SteadyComponent;
  let fixture: ComponentFixture<SteadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
