import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagemlistaComponent } from './viagemlista.component';

describe('ViagemlistaComponent', () => {
  let component: ViagemlistaComponent;
  let fixture: ComponentFixture<ViagemlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViagemlistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViagemlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
