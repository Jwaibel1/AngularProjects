import { Component, Input, Output } from '@angular/core';
import { Movie } from './movie.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movie: Movie;
  @Input() id: number;
  @Output() movieSelected = new Subject<Movie>();

  constructor() {}
}
