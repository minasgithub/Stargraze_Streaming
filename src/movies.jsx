import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import { getMovies } from "./fakeMovieService";
import { getGenres } from "./fakeGenreService";
import Header from "./header";
import Pagination from "./pagination";
import { paginate } from "./utils/paginate";
import Genres from "./genres";
import lodash from "lodash";
import "./styles.css";

export default class Movies extends Component {
  state = {
    currentPage: 1,
    genres: getGenres(),
    inBag: [],
    isModalOpen: false,
    movies: getMovies(),
    pageSize: 7,
    sortColumn: { path: "title", order: "asc" }
  };

  handleAddToBag = (movieId) => {
    const addedMovies = [...this.state.inBag];
    const movieToAdd = this.state.movies.filter(
      (movie) => movie._id === movieId
    );
    addedMovies.push(movieToAdd);
    this.setState({ inBag: addedMovies });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleDelete = (movieId) => {
    const movies = this.state.movies.filter((movie) => movie._id !== movieId);
    this.setState({ movies: movies });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleShowBag = () => {
    this.setState({ isModalOpen: true });
  };

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies.length;
    const {
      currentPage,
      movies: allMovies,
      pageSize,
      selectedGenre,
      sortColumn
    } = this.state;

    if (count === 0) {
      return <p>There are no movies in the database</p>;
    }

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = lodash.orderBy(
      filtered,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="movies">
        <Header
          inBag={this.state.inBag}
          itemsCount={filtered.length}
          onCloseModal={this.handleCloseModal}
          onShowBag={this.handleShowBag}
          openModal={this.state.isModalOpen}
        />
        <Genres
          items={this.state.genres}
          selectedItem={selectedGenre}
          onItemSelect={this.handleGenreSelect}
        />
        <MoviesTable
          movies={movies}
          onAdd={this.handleAddToBag}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
          onSort={this.handleSort}
          sortColumn={sortColumn}
        />
        <Pagination
          itemsCount={filtered.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}
