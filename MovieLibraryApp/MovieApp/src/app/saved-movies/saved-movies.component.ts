import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie/movie.model';
import { SavedMovieService } from './saved-movies.service';

@Component({
  selector: 'app-saved-movies',
  templateUrl: './saved-movies.component.html',
  styleUrls: ['./saved-movies.component.css'],
})
export class SavedMoviesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
