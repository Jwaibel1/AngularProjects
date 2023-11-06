import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SavedMovieService } from 'src/app/saved-movies/saved-movies.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  movieChangeSub: Subscription;

  constructor(private savedMovieService: SavedMovieService) {}

  ngOnInit(): void {
    this.movieChangeSub = this.savedMovieService.movieSelected.subscribe(
      (data) => {
        console.log(data);
        alert(
          `title: ${data.title}\n genre: ${data.genre}\n rated: ${data.ageRating}`
        );
      }
    );
  }

  ngOnDestroy() {
    this.movieChangeSub.unsubscribe();
  }
}
