import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTurmasComponent } from './adm-turmas.component';

describe('AdmTurmasComponent', () => {
  let component: AdmTurmasComponent;
  let fixture: ComponentFixture<AdmTurmasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmTurmasComponent]
    });
    fixture = TestBed.createComponent(AdmTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
