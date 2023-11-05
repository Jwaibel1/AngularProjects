import { Component, OnInit, Input } from '@angular/core';

import { Movie } from 'src/app/shared/movie/movie.model';
import { SavedMovieService } from '../saved-movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() movie: Movie;

  myMovies: Movie[] = [];

  constructor(
    private savedMovieService: SavedMovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onNewMovie() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnInit(): void {
    this.myMovies = this.savedMovieService.getMovies();
    this.savedMovieService.movieListChanged.subscribe((movies: Movie[]) => {
      this.myMovies = movies;
    });
  }

  onRemoveMovie(id) {
    this.savedMovieService.removeMovie(id);
  }
}
