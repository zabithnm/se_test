import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDepComponent } from './nav-dep.component';

describe('NavDepComponent', () => {
  let component: NavDepComponent;
  let fixture: ComponentFixture<NavDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
