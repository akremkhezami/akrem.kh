import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingreadyComponent } from './gettingready.component';

describe('GettingreadyComponent', () => {
  let component: GettingreadyComponent;
  let fixture: ComponentFixture<GettingreadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingreadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingreadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
