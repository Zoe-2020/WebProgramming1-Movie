import { Injectable } from '@angular/core';
import { Movie } from "../movie.model";


@Injectable({
  providedIn: 'root'
})
export class MovieService {

movie:Movie;

  constructor() { }

  movieList = [
    new Movie('Parsite','2019', 'Bong Joon-ho'),
    new Movie('The Godfather','1972','Francis Ford Coppola'),
    new Movie('Perfect Blue','1997','Satoshi Kon'),
    new Movie('Memories of Murder','2003','Bong Joon-ho'),
    new Movie('Akira','1998', 'Katsuhiro Otomo')
  ];

  getMovie() {
    return this.movieList.sort();
  }
  addMovie(movietitle:string, moviedirector:string , movieyear:string){
    this.movieList.push({title:movietitle,director:moviedirector, year:movieyear});
  }

}
