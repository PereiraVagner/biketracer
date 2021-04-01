import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristalocalizacaoComponent } from './motoristalocalizacao.component';

describe('MotoristalocalizacaoComponent', () => {
  let component: MotoristalocalizacaoComponent;
  let fixture: ComponentFixture<MotoristalocalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoristalocalizacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoristalocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
