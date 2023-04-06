import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  useEffect(() => {
    const FetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };

    FetchMovies();
  }, []);

  return (
    <>
      <div className="row">
        <h4>Joel Hilton Movie List</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Movie ID</th>
              <th>Category</th>
              <th>Title</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr key={m.movieId}>
                <td>{m.movieId}</td>
                <td>{m.category}</td>
                <td>{m.title}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MovieList;
