import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-edit-film',
  template: `
  <h2>Éditer {{ film?.primaryTitle }}</h2>
  <app-film-form *ngIf="film" [film]="film"></app-film-form>
  `,
  styles: [
  ]
})
export class EditFilmComponent implements OnInit {

  film: Film|undefined;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    const filmCode: string|null = this.route.snapshot.paramMap.get('tconst');
    if(filmCode){
      this.film = this.filmService.getFilmByCode(filmCode);
    } else {
      this.film = undefined;
    }
  }

}
