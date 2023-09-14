import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBusquedaComponent } from './movie-busqueda.component';

describe('MovieBusquedaComponent', () => {
  let component: MovieBusquedaComponent;
  let fixture: ComponentFixture<MovieBusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieBusquedaComponent]
    });
    fixture = TestBed.createComponent(MovieBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
