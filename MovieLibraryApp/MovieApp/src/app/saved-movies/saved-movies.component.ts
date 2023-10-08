import { Component } from '@angular/core';
import { Movie } from '../shared/movie/movie.model';

@Component({
  selector: 'app-saved-movies',
  templateUrl: './saved-movies.component.html',
  styleUrls: ['./saved-movies.component.css'],
})
export class SavedMoviesComponent {
  selectedMovie: Movie;
}
