import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/myErrorStateMatcher';
import { MovieService } from '../../movie.service';
import { QueryMovie } from '../../interfaces/querymovie';
import { Movie, Result } from '../../interfaces/movie.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-movie-busqueda',
  templateUrl: './movie-busqueda.component.html',
  styleUrls: ['./movie-busqueda.component.css']
})
export class MovieBusquedaComponent {

  matcher: MyErrorStateMatcher;
  public movies: Result[] = [];

  miFormulario: FormGroup = this.fb.group({
    query: ['', Validators.required],
    include_adult: ['', Validators.required],
    language: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService
  ) {
    this.matcher = new MyErrorStateMatcher();
  }

  buscar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    const queryMovie =  new QueryMovie(this.miFormulario.value);

    this.movieService.post(queryMovie)
      .pipe(
        tap((movie: Movie) => {
          this.movies = movie.results;
        })
      ).subscribe();
  }

  campoEsValido(campo:string): boolean | undefined {
    return this.miFormulario?.get(campo)?.invalid &&
      this.miFormulario?.get(campo)?.touched;
  }

  getMensaje(campo: string): string {
    const errorControl = this.miFormulario?.get(campo)?.errors;

    if (errorControl!['required']) return 'El campo es requerido';

    return '';
  }
}

// b1e2aa19774798555addb662514307ca -- api key
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWUyYWExOTc3NDc5ODU1NWFkZGI2NjI1MTQzMDdjYSIsInN1YiI6IjY1MDExZDY4NTU0NWNhMDBmZWE3MDRmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nc8isgLJbI6jtrSoV55A2tfwPKVAVFOZ-FKaJuYgq-s
