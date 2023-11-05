import { LibraryComponent } from './library/library.component';
import { MovieDetailsComponent } from './saved-movies/movie-details/movie-details.component';
import { MovieEditorComponent } from './saved-movies/movie-editor/movie-editor.component';
import { SavedMovieHomeComponent } from './saved-movies/saved-movie-home/saved-movie-home.component';
import { SavedMoviesComponent } from './saved-movies/saved-movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/saved-movies', pathMatch: 'full' },
  {
    path: 'saved-movies',
    component: SavedMoviesComponent,
    children: [
      { path: '', component: SavedMovieHomeComponent },
      { path: 'new', component: MovieEditorComponent },
      { path: ':id', component: MovieDetailsComponent },
      { path: ':id/edit', component: MovieEditorComponent },
    ],
  },
  { path: 'library', component: LibraryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
