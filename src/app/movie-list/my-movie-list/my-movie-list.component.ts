import { Component, OnInit } from '@angular/core';
import { MovieInterface } from "../../interfaces"

@Component({
  selector: 'app-my-movie-list',
  templateUrl: './my-movie-list.component.html',
  styleUrls: ['./my-movie-list.component.css']
})
export class MyMovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 

  public movies: MovieInterface[] = [ 
    {
      "Poster_Link": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
      "Series_Title": "The Shawshank Redemption",
      "Released_Year": 1994,
      "Certificate": "A",
      "Runtime": "142 min",
      "Genre": "Drama",
      "IMDB_Rating": 9.3,
      "Overview": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "Meta_score": 80,
      "Director": "Frank Darabont",
      "Star1": "Tim Robbins",
      "Star2": "Morgan Freeman",
      "Star3": "Bob Gunton",
      "Star4": "William Sadler",
      "No_of_Votes": 2343110,
      "Gross": "28,341,469"
    },
    {
      "Poster_Link": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg",
      "Series_Title": "The Godfather",
      "Released_Year": 1972,
      "Certificate": "A",
      "Runtime": "175 min",
      "Genre": "Crime, Drama",
      "IMDB_Rating": 9.2,
      "Overview": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      "Meta_score": 100,
      "Director": "Francis Ford Coppola",
      "Star1": "Marlon Brando",
      "Star2": "Al Pacino",
      "Star3": "James Caan",
      "Star4": "Diane Keaton",
      "No_of_Votes": 1620367,
      "Gross": "134,966,411"
    }, 
    {
      "Poster_Link": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
      "Series_Title": "The Dark Knight",
      "Released_Year": 2008,
      "Certificate": "UA",
      "Runtime": "152 min",
      "Genre": "Action, Crime, Drama",
      "IMDB_Rating": 9,
      "Overview": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "Meta_score": 84,
      "Director": "Christopher Nolan",
      "Star1": "Christian Bale",
      "Star2": "Heath Ledger",
      "Star3": "Aaron Eckhart",
      "Star4": "Michael Caine",
      "No_of_Votes": 2303232,
      "Gross": "534,858,444"
    },
    {
      "Poster_Link": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg",
      "Series_Title": "The Godfather: Part II",
      "Released_Year": 1974,
      "Certificate": "A",
      "Runtime": "202 min",
      "Genre": "Crime, Drama",
      "IMDB_Rating": 9,
      "Overview": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      "Meta_score": 90,
      "Director": "Francis Ford Coppola",
      "Star1": "Al Pacino",
      "Star2": "Robert De Niro",
      "Star3": "Robert Duvall",
      "Star4": "Diane Keaton",
      "No_of_Votes": 1129952,
      "Gross": "57,300,000"
    },
    {
      "Poster_Link": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX67_CR0,0,67,98_AL_.jpg",
      "Series_Title": "12 Angry Men",
      "Released_Year": 1957,
      "Certificate": "U",
      "Runtime": "96 min",
      "Genre": "Crime, Drama",
      "IMDB_Rating": 9,
      "Overview": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      "Meta_score": 96,
      "Director": "Sidney Lumet",
      "Star1": "Henry Fonda",
      "Star2": "Lee J. Cobb",
      "Star3": "Martin Balsam",
      "Star4": "John Fiedler",
      "No_of_Votes": 689845,
      "Gross": "4,360,000"
    },
    {
      "Poster_Link": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
      "Series_Title": "The Lord of the Rings: The Return of the King",
      "Released_Year": 2003,
      "Certificate": "U",
      "Runtime": "201 min",
      "Genre": "Action, Adventure, Drama",
      "IMDB_Rating": 8.9,
      "Overview": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      "Meta_score": 94,
      "Director": "Peter Jackson",
      "Star1": "Elijah Wood",
      "Star2": "Viggo Mortensen",
      "Star3": "Ian McKellen",
      "Star4": "Orlando Bloom",
      "No_of_Votes": 1642758,
      "Gross": "377,845,905"
    },
    {
      "Poster_Link": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR0,0,67,98_AL_.jpg",
      "Series_Title": "Pulp Fiction",
      "Released_Year": 1994,
      "Certificate": "A",
      "Runtime": "154 min",
      "Genre": "Crime, Drama",
      "IMDB_Rating": 8.9,
      "Overview": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "Meta_score": 94,
      "Director": "Quentin Tarantino",
      "Star1": "John Travolta",
      "Star2": "Uma Thurman",
      "Star3": "Samuel L. Jackson",
      "Star4": "Bruce Willis",
      "No_of_Votes": 1826188,
      "Gross": "107,928,762"
    }
  ]

}
