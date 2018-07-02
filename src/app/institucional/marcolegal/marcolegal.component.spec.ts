import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcolegalComponent } from './marcolegal.component';

describe('MarcolegalComponent', () => {
  let component: MarcolegalComponent;
  let fixture: ComponentFixture<MarcolegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcolegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcolegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
