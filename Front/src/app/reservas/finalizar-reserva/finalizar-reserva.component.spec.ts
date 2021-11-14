import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarReservaComponent } from './finalizar-reserva.component';

describe('FinalizarReservaComponent', () => {
  let component: FinalizarReservaComponent;
  let fixture: ComponentFixture<FinalizarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
