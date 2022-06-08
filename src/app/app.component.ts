import { Component, OnInit } from '@angular/core';
import { FILM } from './film/mock-film-list';
import { Film } from './film/film'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  filmList: Film[] = FILM;
  filmSelected: Film|undefined;

  ngOnInit () {
    console.table(this.filmList);
  }

  selectFilm(filmTitle: string) {
    const film: Film|undefined = this.filmList.find(film => film.primaryTitle == filmTitle)
    if(film) {
      console.log('Vous avez sélectionné le film ' + film?.primaryTitle);
      this.filmSelected = film;
    } else {
      console.log('Vous avez sélectionné un film qui n existe pas');
      this.filmSelected = film;
    }
  }
}
