import { Component } from '@angular/core';

import { Movie } from 'src/app/shared/movie/movie.model';

@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.css'],
})
export class MovieResultsComponent {
  allMovies: Movie[] = [
    new Movie(
      'The Lord of the Rings: The Fellowship of the Ring',
      'Fantasy/Adventure',
      'PG-13',
      '95%',
      'The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOUXPaLlifPLJ_eFSc2BMAu534Uo_7ZgbXfRjbBkdSMM13JnSsKbQmYadrj6HRWVSO_2Y&usqp=CAU'
    ),
    new Movie(
      'title',
      'genre',
      'ageRating',
      'reviewRating',
      'synopsis',
      'coverImage'
    ),
    new Movie(
      'title',
      'genre',
      'ageRating',
      'reviewRating',
      'synopsis',
      'coverImage'
    ),
    new Movie(
      'title',
      'genre',
      'ageRating',
      'reviewRating',
      'synopsis',
      'coverImage'
    ),
    new Movie(
      'title',
      'genre',
      'ageRating',
      'reviewRating',
      'synopsis',
      'coverImage'
    ),
    new Movie(
      'title',
      'genre',
      'ageRating',
      'reviewRating',
      'synopsis',
      'coverImage'
    ),
    new Movie(
      'title',
      'genre',
      'ageRating',
      'reviewRating',
      'synopsis',
      'coverImage'
    ),
    new Movie(
      'title',
      'genre',
      'ageRating',
      'reviewRating',
      'synopsis',
      'coverImage'
    ),
    new Movie(
      'title',
      'genre',
      'ageRating',
      'reviewRating',
      'synopsis',
      'coverImage'
    ),
    new Movie(
      'title',
      'genre',
      'ageRating',
      'reviewRating',
      'synopsis',
      'coverImage'
    ),
  ];
}
