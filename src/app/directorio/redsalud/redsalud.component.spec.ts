import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsaludComponent } from './redsalud.component';

describe('RedsaludComponent', () => {
  let component: RedsaludComponent;
  let fixture: ComponentFixture<RedsaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedsaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedsaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
