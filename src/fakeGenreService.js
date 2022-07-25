export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471810", name: "Animation" },
  { _id: "5b21ca3eeb7f6fbccd471811", name: "Children" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471815", name: "Drama" },
  { _id: "5b21ca3eeb7f6fbccd471812", name: "Documentary" },
  { _id: "5b21ca3eeb7f6fbccd471822", name: "Fantasy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" }
];

export function getGenres() {
  return genres.filter((g) => g);
}
