import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguramientoComponent } from './aseguramiento.component';

describe('AseguramientoComponent', () => {
  let component: AseguramientoComponent;
  let fixture: ComponentFixture<AseguramientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseguramientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguramientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
