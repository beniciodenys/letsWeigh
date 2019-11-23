import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeigherComponent } from './weigher.component';

describe('WeigherComponent', () => {
  let component: WeigherComponent;
  let fixture: ComponentFixture<WeigherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeigherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeigherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
