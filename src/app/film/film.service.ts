import { Injectable } from '@angular/core';
import { Film } from './film';
import { FILM } from './mock-film-list';

@Injectable()
export class FilmService {

  constructor() { }

  getFilmList(): Film[] {
    return FILM;
  }

  getFilmByCode(filmCode: string): Film|undefined {
    return FILM.find(film => filmCode == film.tconst);
  }

  getFilmByGenres(): string[] {
    return [
      'Documentary', 
      'Short', 
      'Animation', 
      'Comedy', 
      'Romance', 
      'Sport', 
      'News', 
      'Drama', 
      'Horror', 
      'Fantasy', 
      'Biography', 
      'Music', 
      'Crime', 
      'Western', 
      'War', 
      'Family', 
      'Adventure', 
      'History', 
      'Action', 
      'Mystery', 
      'Sci-Fi', 
      'Musical', 
      'Thriller'
    ]}
}
