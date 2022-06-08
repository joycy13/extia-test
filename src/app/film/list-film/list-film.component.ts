import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
})
export class ListFilmComponent implements OnInit {

  filmList: Film[];

  constructor (
    private router: Router,
    private filmService: FilmService
    ) { }

  ngOnInit() {
    this.filmList = this.filmService.getFilmList();
  }

  goToFilm(film: Film) {
    this.router.navigate(['/film/', film.tconst])
  }
}
