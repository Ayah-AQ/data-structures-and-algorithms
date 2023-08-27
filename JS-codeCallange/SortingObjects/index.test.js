const { movies, sortMoviesByReleaseYear, sortMoviesAlphabetically } = require("./index");

test("Sorting movies by release year", () => {
  const sorted = sortMoviesByReleaseYear(movies);
  expect(sorted[0].name).toBe("Avengers: Endgame");
  expect(sorted[sorted.length - 1].name).toBe("Forrest Gump");
});

test("Sorting movies alphabetically", () => {
  const sorted = sortMoviesAlphabetically(movies);
  expect(sorted[0].name).toBe("Avatar");
  expect(sorted[sorted.length - 1].name).toBe("Interstellar");
});