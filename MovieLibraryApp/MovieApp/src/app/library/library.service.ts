import { Injectable } from '@angular/core';
import { Movie } from '../shared/movie/movie.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  movieListChanged = new Subject<Movie[]>();

  private allMovies: Movie[] = [
    new Movie(
      'The Lord of the Rings',
      'Fantasy/Adventure',
      'PG-13',
      '95%',
      'The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOUXPaLlifPLJ_eFSc2BMAu534Uo_7ZgbXfRjbBkdSMM13JnSsKbQmYadrj6HRWVSO_2Y&usqp=CAU'
    ),
    new Movie(
      'The Road',
      'Drama/Thriller',
      'R',
      '74%',
      'America is a grim, gray shadow of itself after a catastrophe. A man (Viggo Mortensen) and his young son (Kodi Smit-McPhee) wander through this post-apocalyptic world, trying to keep the dream of civilization alive. They journey toward the sea, surviving as best they can on what they can scavenge, and try to avoid roving gangs of savage humans who will turn them into slaves, or worse.',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62ffb509-e147-404f-911b-3e25df7d9386/d2e8nv4-9f3a6800-77ea-4549-b12a-35768cea8f65.jpg/v1/fill/w_600,h_897,q_75,strp/the_road_movie_poster_by_karezoid_d2e8nv4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk3IiwicGF0aCI6IlwvZlwvNjJmZmI1MDktZTE0Ny00MDRmLTkxMWItM2UyNWRmN2Q5Mzg2XC9kMmU4bnY0LTlmM2E2ODAwLTc3ZWEtNDU0OS1iMTJhLTM1NzY4Y2VhOGY2NS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ytHf6ZSu9GV3YYw7VcjvrMdrvklS401Rl736VC_F0t8'
    ),
    new Movie(
      'Reservoir Dogs',
      'Crime/Drama',
      'R',
      '94%',
      'Six criminals with pseudonyms, and each strangers to one another, are hired to carry out a robbery. The heist is ambushed by police and the gang are forced to shoot their way out. At their warehouse rendezvous, the survivors, realising that they were set up, try to find the traitor in their midst.',
      'https://m.media-amazon.com/images/M/MV5BMzQ1ZmVlNzYtZGU3Yi00YjU0LWFhYTctODIwY2ZmNmMzMTc1XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg'
    ),
    new Movie(
      'The Room',
      'Drama',
      'R',
      '25%',
      "Johnny is a successful banker who lives happily in a San Francisco townhouse with his fiancée, Lisa. One day, inexplicably, she gets bored of him and decides to seduce Johnny's best friend, Mark. From there, nothing will be the same again.",
      'https://ih1.redbubble.net/image.3755726822.3816/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
    ),
    new Movie(
      'The Matrix',
      'Sci-Fi/Action',
      'R',
      '85%',
      'Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/83c9adee-fb29-40a6-8232-2f5c1a310874/d25m56x-382054fe-612f-44dd-939d-28df1dfbcb71.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgzYzlhZGVlLWZiMjktNDBhNi04MjMyLTJmNWMxYTMxMDg3NFwvZDI1bTU2eC0zODIwNTRmZS02MTJmLTQ0ZGQtOTM5ZC0yOGRmMWRmYmNiNzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zfZgazeCZCizJa6XDg1WLDneDx4YqdWpE4yQZoQ8trQ'
    ),
    new Movie(
      'Hereditary',
      'Horror/Thriller',
      'R',
      '90%',
      'When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited.',
      'https://i.etsystatic.com/26881902/r/il/c34484/2859797302/il_570xN.2859797302_kl5m.jpg'
    ),
    new Movie(
      'Seven Samurai',
      'Action/Drama',
      'Not Rated',
      '100%',
      "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food. A giant battle occurs when 40 bandits attack the village.",
      'https://i.etsystatic.com/23647903/r/il/e46965/2582824610/il_fullxfull.2582824610_sypp.jpg'
    ),
    new Movie(
      'Shaun of the Dead',
      'Comedy/Horror',
      'R',
      '93%',
      "Shaun is a 30-something loser with a dull, easy existence. When he's not working at the electronics store, he lives with his slovenly best friend, Ed, in a small flat on the outskirts of London. The only unpredictable element in his life is his girlfriend, Liz, who wishes desperately for Shaun to grow up and be a man. When the town is inexplicably overrun with zombies, Shaun must rise to the occasion and protect both Liz and his mother.",
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ccc87e3-9294-40eb-a40a-b60ca83b536d/d3b5i3y-4a8bbe5f-22ed-481d-bc8c-01cb0ac991c8.png/v1/fill/w_574,h_840/shaun_of_the_dead_by_fabledcreative_d3b5i3y-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQwIiwicGF0aCI6IlwvZlwvOGNjYzg3ZTMtOTI5NC00MGViLWE0MGEtYjYwY2E4M2I1MzZkXC9kM2I1aTN5LTRhOGJiZTVmLTIyZWQtNDgxZC1iYzhjLTAxY2IwYWM5OTFjOC5wbmciLCJ3aWR0aCI6Ijw9NTc0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.DFX0reLTwS8KoEB9JEOfGpIpw40pZA7Rl6le9tgJX3o'
    ),
    new Movie(
      'Parasite',
      'Mystery/Thriller',
      'R',
      '99%',
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
      'https://assets.mubicdn.net/images/notebook/post_images/29832/images-w1400.jpg?1579570864'
    ),
    new Movie(
      'Snowpiercer',
      'Sci-Fi/Action',
      'R',
      '94%',
      "Survivors of Earth's second ice age live out their days on a luxury train that ploughs through snow and ice. The train's poorest residents, who live in the squalid caboose, plan to improve their lot by taking over the engine room.",
      'https://cdn.seat42f.com/wp-content/uploads/2014/06/11205335/Snowpiercer-Movie-Poster-Chris-Evans.jpg'
    ),
  ];

  getMovies() {
    return this.allMovies.slice();
  }
}
