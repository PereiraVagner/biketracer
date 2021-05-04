import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientecadastroComponent } from './clientecadastro.component';

describe('ClientecadastroComponent', () => {
  let component: ClientecadastroComponent;
  let fixture: ComponentFixture<ClientecadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientecadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientecadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
