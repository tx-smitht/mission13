import { useState } from 'react';
import data from './MovieDataSample.json';
// We call this data, that's our own name for it

const movieDataSet = data.MovieDataSampleList; // Grab this name from the attribute in JSON file

function MovieList() {
  const [listOMovies, setListOMovies] = useState(movieDataSet);
  // We are setting the state here equal to the original list of movies.
  // This is the hook where we set the inital state.

  const addMovie = () => {
    setListOMovies([
      ...movieDataSet, // First thing that comes in is what was in
      // the original state.
      // Second thing that comes in is
      // the new object to be created
      {
        MovieId: 6,
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Tim Burton',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <>
      <div>
        <h3>Joel Hilton Movie Colleciton</h3>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {listOMovies.map((m) => (
            <tr key={m.MovieId}>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
