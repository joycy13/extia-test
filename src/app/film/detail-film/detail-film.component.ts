import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styles: [
  ]
})
export class DetailFilmComponent implements OnInit {

  filmList: Film[];
  film: Film|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
    ) { }

  ngOnInit() {
    const filmCode: string|null = this.route.snapshot.paramMap.get('tconst');
    if(filmCode) {
      this.film = this.filmService.getFilmByCode(filmCode)
    } 
  }

  goToFilmsList() {
    this.router.navigate(['/films'])
  }

  goToEditFilm(film: Film) {
    this.router.navigate(['/edit/film', film.tconst]);
  }
}
