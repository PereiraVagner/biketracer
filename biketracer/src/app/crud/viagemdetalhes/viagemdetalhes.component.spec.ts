import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagemdetalhesComponent } from './viagemdetalhes.component';

describe('ViagemdetalhesComponent', () => {
  let component: ViagemdetalhesComponent;
  let fixture: ComponentFixture<ViagemdetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViagemdetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViagemdetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
