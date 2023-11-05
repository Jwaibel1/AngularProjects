import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie/movie.model';
import { SavedMovieService } from '../saved-movies.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  id: number;

  constructor(
    private savedMovieService: SavedMovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onEditMovie() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onRemoveMovie() {
    this.savedMovieService.removeMovie(this.id);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.movie = this.savedMovieService.getMovie(this.id);
    });
  }
}
