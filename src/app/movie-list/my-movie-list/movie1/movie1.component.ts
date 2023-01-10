import { Component, Input, OnInit } from '@angular/core';
import { MovieInterface } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movie1',
  templateUrl: './movie1.component.html',
  styleUrls: ['./movie1.component.css']
})
export class Movie1Component implements OnInit { 
  @Input()
  movie!: MovieInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
