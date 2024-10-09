import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAlunosComponent } from './adm-alunos.component';

describe('AdmAlunosComponent', () => {
  let component: AdmAlunosComponent;
  let fixture: ComponentFixture<AdmAlunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmAlunosComponent]
    });
    fixture = TestBed.createComponent(AdmAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
