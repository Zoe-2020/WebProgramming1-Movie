import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    { title:'Parsite',year:'2019',director: 'Bong Joon-ho'},
    { title:'The Godfather',year:'1972',director:'Francis Ford Coppola'},
    { title:'Perfect Blue',year:'1997',director:'Satoshi Kon'},
    { title:'Memories of Murder',year:'2003',director: 'Bong Joon-ho'},
    { title:'Akira',year:'1998',director: 'Katsuhiro Otomo'}
  ];

  getMovie() {
    return this.movieList;
  }
  addMovie(movietitle:string, moviedirector:string , movieyear:string){
    this.movieList.push({title:movietitle,director:moviedirector, year:movieyear});
  }

}
