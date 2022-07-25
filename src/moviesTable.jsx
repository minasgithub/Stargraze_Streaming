import React from "react";

const MoviesTable = (props) => {
  const { movies, onAdd, onDelete, onSort } = props;

  return (
    <div className="moviesTable">
      <table>
        <thead>
          <tr>
            <th onClick={() => onSort("title")}>Title</th>
            <th onClick={() => onSort("genre.name")}>Genre</th>
            <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>${movie.dailyRentalRate}</td>
              <td>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => onDelete(movie._id)}
                >
                  Remove
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="add-btn"
                  onClick={() => onAdd(movie._id)}
                >
                  Add to bag
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesTable;
