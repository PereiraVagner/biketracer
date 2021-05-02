import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagemcadastroComponent } from './viagemcadastro.component';

describe('ViagemcadastroComponent', () => {
  let component: ViagemcadastroComponent;
  let fixture: ComponentFixture<ViagemcadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViagemcadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViagemcadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
