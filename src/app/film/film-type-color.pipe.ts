import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmTypeColor'
})
export class FilmTypeColorPipe implements PipeTransform {

  transform(genre: string): string {
  
    let color: string;
  
    switch (genre) {
      case 'Documentary':
        color = ' light-green';
        break;
      case 'Short':
        color = ' cyan lighten-3';
        break;
      case 'Animation':
        color = ' orange lighten-3';
        break;
      case 'Comedy':
        color = ' teal accent-3';
        break;
      case 'Romance':
        color = ' red lighten-1';
        break;
      case 'Sport':
        color = ' blue-grey lighten-4';
        break;
      case 'News':
        color = ' light-blue accent-2';
        break;
      case 'Drama':
        color = ' blue-grey lighten-1';
        break;
      case 'Horror':
        color = ' brown lighten-4';
        break;
      case 'Fantasy':
        color = ' green accent-2';
        break;
      case 'Biography':
        color = ' lime darken-1';
        break;
      case 'Music':
        color = ' lime darken-2';
        break;
      case 'Crime':
        color = '	deep-purple accent-1';
        break;
      case 'Western':
        color = ' brown lighten-2';
        break;
      case 'War':
        color = ' grey lighten-1';
        break;  
      case 'Family':
        color = ' indigo lighten-3';
        break;
      case 'Adventure':
        color = ' green accent-4';
        break;  
      case 'History':
        color = ' red lighten-3';
        break; 
      case 'Action':
        color = ' purple lighten-4';
        break; 
      case 'Mystery':
        color = ' yellow lighten-4';
        break;  
      case 'Sci-Fi':
        color = ' amber lighten-3';
        break;
      case 'Musical':
        color = ' pink lighten-2';
        break; 
      case 'Thriller':
        color = ' indigo accent-1';
        break;      
      default:
        color = '#000000';
        break;
    }

    return 'chip' + color;
  
  }

}
