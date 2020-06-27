import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavJobComponent } from './nav-job.component';

describe('NavJobComponent', () => {
  let component: NavJobComponent;
  let fixture: ComponentFixture<NavJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
