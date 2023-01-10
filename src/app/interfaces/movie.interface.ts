export interface MovieInterface  { 
"Poster_Link" : string,
"Series_Title" : string
"Released_Year" : number
"Certificate" : string
"Runtime" : string
"Genre" : string
"IMDB_Rating" : number
"Overview" : string
"Meta_score" : number
"Director" : string
"Star1" : string
"Star2" : string
"Star3" : string
"Star4" : string
"No_of_Votes" : number
"Gross" : string      
} 

export interface AuthResponseData {
    "kind": string;
    "idToken": string;
    "email": string;
    "refreshToken": string;
    "expiresIn": string;
    "localId": string;
    "registered?": boolean;
  }
  