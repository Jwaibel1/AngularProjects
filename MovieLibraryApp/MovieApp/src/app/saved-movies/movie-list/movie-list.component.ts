import { Component, Output, EventEmitter } from '@angular/core';

import { Movie } from 'src/app/shared/movie/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  @Output() currentMovieSelected = new EventEmitter<Movie>();

  handleMovieSelected(movie: Movie) {
    this.currentMovieSelected.emit(movie);
  }

  myMovies: Movie[] = [
    new Movie(
      'No Country for Old Men',
      'Crime/Drama',
      'R',
      '93%',
      'While out hunting, Llewelyn Moss (Josh Brolin) finds the grisly aftermath of a drug deal. Though he knows better, he cannot resist the cash left behind and takes it with him. The hunter becomes the hunted when a merciless killer named Chigurh (Javier Bardem) picks up his trail. Also looking for Moss is Sheriff Bell (Tommy Lee Jones), an aging lawman who reflects on a changing world and a dark secret of his own, as he tries to find and protect Moss.',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d41b3f82167047.5d14eb668419f.jpg'
    ),
    new Movie(
      'OldBoy',
      'Mystery/Thriller',
      'R',
      '94%',
      "Dae-Su is an obnoxious drunk bailed from the police station yet again by a friend. However, he's abducted from the street and wakes up in a cell, where he remains for the next 15 years, drugged unconscious when human contact is unavoidable, otherwise with only the television as company. And then, suddenly released, he is invited to track down his jailor with a denouement that is simply stunning.",
      'https://cdna.artstation.com/p/assets/images/images/010/398/998/medium/tu-bui-tu-movies-oldboy-02.jpg?1524205008'
    ),
    new Movie(
      'The Iron Giant',
      'Family/Adventure',
      'PG',
      '96%',
      "In this animated adaptation of Ted Hughes' Cold War fable, a giant alien robot (Vin Diesel) crash-lands near the small town of Rockwell, Maine, in 1957. Exploring the area, a local 9-year-old boy, Hogarth, discovers the robot, and soon forms an unlikely friendship with him. When a paranoid government agent, Kent Mansley, becomes determined to destroy the robot, Hogarth and beatnik Dean McCoppin (Harry Connick Jr.) must do what they can to save the misunderstood machine.",
      'https://flxt.tmsimg.com/assets/p23609_p_v8_aj.jpg'
    ),
    new Movie(
      'The Thing(1982)',
      'Horror/Sci-Fi',
      'R',
      '92%',
      'In remote Antarctica, a group of American research scientists are disturbed at their base camp by a helicopter shooting at a sled dog. When they take in the dog, it brutally attacks both human beings and canines in the camp and they discover that the beast can assume the shape of its victims. A resourceful helicopter pilot (Kurt Russell) and the camp doctor (Richard Dysart) lead the camp crew in a desperate, gory battle against the vicious creature before it picks them all off, one by one.',
      'https://myhotposters.com/cdn/shop/products/HP2952_19818a0c-5936-4e57-a8ed-c3f952a700dd_1024x1024.jpg?v=1571445093'
    ),
    new Movie(
      'Tropic Thunder',
      'Comedy/Action',
      'R',
      '82%',
      'While shooting a war film, the director attempts to liven up proceedings by dropping the principle actors into the middle of a real jungle, claiming he is going to capture their performance with hidden cameras. The hapless group including drug-addled comedy star Jeff Portnoy and po-faced method man Kirk Lazarus are completely unaware when a series of unfortunate events leads them into the middle of a real war zone.',
      'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2890318/5933251/MOVEI5743__23896.1679580459.jpg?c=2'
    ),
  ];
}
