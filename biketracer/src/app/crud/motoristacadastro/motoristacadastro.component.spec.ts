import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristacadastroComponent } from './motoristacadastro.component';

describe('MotoristacadastroComponent', () => {
  let component: MotoristacadastroComponent;
  let fixture: ComponentFixture<MotoristacadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoristacadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoristacadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
