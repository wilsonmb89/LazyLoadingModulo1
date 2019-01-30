import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1Pagina3Component } from './modulo1-pagina3.component';

describe('Modulo1Pagina3Component', () => {
  let component: Modulo1Pagina3Component;
  let fixture: ComponentFixture<Modulo1Pagina3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo1Pagina3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo1Pagina3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
