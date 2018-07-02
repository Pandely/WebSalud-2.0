import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosgestionComponent } from './documentosgestion.component';

describe('DocumentosgestionComponent', () => {
  let component: DocumentosgestionComponent;
  let fixture: ComponentFixture<DocumentosgestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentosgestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosgestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
