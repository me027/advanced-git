import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }  

  public releaseYear: any = 1950

  captureInput(value: any) { 
    this.releaseYear = value.target.value
  }


  onSubmit(form: NgForm) { 
    console.log(form.form.value)
  }
}
