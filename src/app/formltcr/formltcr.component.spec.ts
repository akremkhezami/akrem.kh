import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormltcrComponent } from './FormltcrComponent';

describe('FormltcrComponent', () => {
  let component: FormltcrComponent;
  let fixture: ComponentFixture<FormltcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormltcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormltcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
