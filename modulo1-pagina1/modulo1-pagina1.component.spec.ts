import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1Pagina1Component } from './modulo1-pagina1.component';

describe('Modulo1Pagina1Component', () => {
  let component: Modulo1Pagina1Component;
  let fixture: ComponentFixture<Modulo1Pagina1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo1Pagina1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo1Pagina1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
