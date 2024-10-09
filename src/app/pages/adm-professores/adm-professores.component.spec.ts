import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProfessoresComponent } from './adm-professores.component';

describe('AdmProfessoresComponent', () => {
  let component: AdmProfessoresComponent;
  let fixture: ComponentFixture<AdmProfessoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmProfessoresComponent]
    });
    fixture = TestBed.createComponent(AdmProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
