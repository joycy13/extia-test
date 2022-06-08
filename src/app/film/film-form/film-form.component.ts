import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css'],
})
export class FilmFormComponent implements OnInit {
  @Input() film: Film;
  genres: string[];

  constructor(
    private filmService: FilmService,
    private router: Router
    ) { }

  ngOnInit() {
    this.genres = this.filmService.getFilmByGenres();
  }

  hasGenre(genre: string): boolean {
    return this.film.genres.includes(genre);
  }

  selectGenre($event: Event, genre: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if(isChecked) {
      this.film.genres.push(genre);
    } else {
      const index = this.film.genres.indexOf(genre);
      this.film.genres.splice(index, 1);
    }
  }

  isGenresValid(genre: string): boolean {
    // Si l'utilisateur ne sélectionne aucun genre
    if(this.film.genres.length == 1 && this.hasGenre(genre)) {
      return false;
    }
    // Si l'utilisateur sélectionne plus de 3 genre
    if(this.film.genres.length > 2 && !this.hasGenre(genre)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    console.log('Le formulaire a été soumis.');
    this.router.navigate(['/film', this.film.tconst])
  }
}
