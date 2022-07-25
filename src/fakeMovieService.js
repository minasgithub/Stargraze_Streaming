import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "The Gladiator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd4718bb",
    title: "Box Trolls",
    genre: { id: "5b21ca3eeb7f6fbccd471810", name: "Animation" },
    dailyRentalRate: 4,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471899",
    title: "My Octopus Teacher",
    genre: { _id: "5b21ca3eeb7f6fbccd471812", name: "Documentary" },
    dailyRentalRate: 3
  },
  {
    _id: "5b21ca3eeb7f6fbccd47777",
    title: "The Danish Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471815", name: "Drama" },
    dailyRentalRate: 3
  },
  {
    _id: "5b21ca3eeb7f6fbccd471115",
    title: "The Hobbit",
    genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Fantasy" },
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Cloud Atlas",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471116",
    title: "Wonder Woman",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    dailyRentalRate: 3
  },
  {
    _id: "5b21ca3eeb7f6fbccd4718ao",
    title: "The Aeronauts",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    dailyRentalRate: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd471899",
    title: "How To Change Your Mind",
    genre: { _id: "5b21ca3eeb7f6fbccd471812", name: "Documentary" },
    dailyRentalRate: 3
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Isle of Dogs",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Forest Gump",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Stardust",
    genre: { _id: "5b21ca3eeb7f6fbccd471844", name: "Comedy" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471999",
    title: "Fantastic Fungi",
    genre: { _id: "5b21ca3eeb7f6fbccd471812", name: "Documentary" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182a",
    title: "Everything Everywhere All At Once",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471897",
    title: "Elle Enchanted",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Tinker Tailor Soldier Spy",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Fifth Element",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    title: "Midnight in Paris",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    dailyRentalRate: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182c",
    title: "Inception",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471888",
    title: "Crouching Tiger Hidden Dragon",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd478888",
    title: "Harry Potter and the Philosopher's Stone",
    genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Fantasy" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd477988",
    title: "Harry Potter and the Prisoner of Azkaban",
    genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Fantasy" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd477888",
    title: "Harry Potter and the Half Blood Prince",
    genre: { _id: "5b21ca3eeb7f6fbccd471822", name: "Fantasy" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd477998",
    title: "The Neverending Story",
    genre: { _id: "5b21ca3eeb7f6fbccd471811", name: "Children" },
    dailyRentalRate: 3
  },
  {
    _id: "5b21ca3eeb7f6fbccd477999",
    title: "Marry Poppins",
    genre: { _id: "5b21ca3eeb7f6fbccd471811", name: "Children" },
    dailyRentalRate: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd472378",
    title: "The Trial of the Chicago 7",
    genre: { _id: "5b21ca3eeb7f6fbccd471815", name: "Drama" },
    dailyRentalRate: 3
  },
  {
    _id: "5b21ca3eeb7f6fbccd471234",
    title: "Les Misérables",
    genre: { _id: "5b21ca3eeb7f6fbccd471815", name: "Drama" },
    dailyRentalRate: 3
  },
  {
    _id: "5b21ca3eeb7f6fbcdd477888",
    title: "Alice in Wonderland",
    genre: { _id: "5b21ca3eeb7f6fbccd47822", name: "Fantasy" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21cc3eeb7f6fbcdd477888",
    title: "Three Thousand Years of Longing",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb444fbccd471815",
    title: "Extremely Loud And Incredibly Close",
    genre: { _id: "5b21ca3eeb7f6fbccd471815", name: "Drama" },
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb444fbccd471815",
    title: "Extremely Loud And Incredibly Close",
    genre: { _id: "5b21ca3eeb7f6fbccd471815", name: "Drama" },
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6f445d472378",
    title: "Extremely Loud and Incredibly Close",
    genre: { _id: "5b21ca3eeb7f6fbccd471815", name: "Drama" },
    dailyRentalRate: 3
  },
  {
    _id: "5b21ca3ppb7f6f445d472378",
    title: "The Hitchhiker's Guide to the Galaxy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    dailyRentalRate: 3.5
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
