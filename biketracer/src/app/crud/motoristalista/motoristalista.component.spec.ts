import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristalistaComponent } from './motoristalista.component';

describe('MotoristalistaComponent', () => {
  let component: MotoristalistaComponent;
  let fixture: ComponentFixture<MotoristalistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoristalistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoristalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
