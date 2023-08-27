class Movie {
  constructor(name, releaseYear, genres) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.genres = genres;
  }
}

function createMovie(name, releaseYear, genres) {
  return new Movie(name, releaseYear, genres);
}

const movies = [
  createMovie("The Dark Knight Rises", 2012, ["Action", "Drama"]),
  createMovie("Interstellar", 2014, ["Adventure", "Sci-Fi"]),
  createMovie("Avatar", 2009, ["Action", "Sci-Fi"]),
  createMovie("Forrest Gump", 1994, ["Drama", "Romance"]),
  createMovie("Avengers: Endgame", 2019, ["Action", "Sci-Fi"]),
];

function sortMoviesByReleaseYear(movies) {
  return movies.slice().sort((a, b) => b.releaseYear - a.releaseYear);
}

function sortMoviesAlphabetically(movies) {
  return movies.slice().sort((a, b) => {
    const nameA = a.name.replace(/^(A|An|The)\s/i, "");
    const nameB = b.name.replace(/^(A|An|The)\s/i, "");
    return nameA.localeCompare(nameB);
  });
}

module.exports = {
  movies,
  sortMoviesByReleaseYear,
  sortMoviesAlphabetically,
  createMovie,
};
