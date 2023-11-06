import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/shared/movie/movie.model';
import { LibraryService } from '../library.service';
import { SavedMovieService } from 'src/app/saved-movies/saved-movies.service';

@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.css'],
})
export class MovieResultsComponent implements OnInit {
  allMovies: Movie[] = [];

  constructor(
    private savedMovieService: SavedMovieService,
    private libraryService: LibraryService
  ) {}

  ngOnInit(): void {
    this.allMovies = this.libraryService.getMovies();
  }

  onSaveMovie(movie: Movie) {
    return this.savedMovieService.saveMovie(movie);
  }
}
