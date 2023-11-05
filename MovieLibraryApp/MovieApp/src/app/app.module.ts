import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SavedMoviesComponent } from './saved-movies/saved-movies.component';
import { LibraryComponent } from './library/library.component';
import { MovieListComponent } from './saved-movies/movie-list/movie-list.component';
import { MovieDetailsComponent } from './saved-movies/movie-details/movie-details.component';
import { MovieResultsComponent } from './library/movie-results/movie-results.component';
import { MovieSearchComponent } from './library/movie-search/movie-search.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MovieComponent } from './shared/movie/movie.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { SavedMovieHomeComponent } from './saved-movies/saved-movie-home/saved-movie-home.component';
import { MovieEditorComponent } from './saved-movies/movie-editor/movie-editor.component';
import { NotificationComponent } from './shared/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    SavedMoviesComponent,
    LibraryComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieResultsComponent,
    MovieSearchComponent,
    NavigationComponent,
    MovieComponent,
    DropdownDirective,
    SavedMovieHomeComponent,
    MovieEditorComponent,
    NotificationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
