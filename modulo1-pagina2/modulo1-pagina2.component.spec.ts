import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1Pagina2Component } from './modulo1-pagina2.component';

describe('Modulo1Pagina2Component', () => {
  let component: Modulo1Pagina2Component;
  let fixture: ComponentFixture<Modulo1Pagina2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo1Pagina2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo1Pagina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
