import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  useEffect(() => {
    const FetchMovies = async () => {
      const rsp = await fetch('https://localhost:7297/movie');
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
              <th>Title</th>
              <th>Category</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr key={m.movieId}>
                <td>{m.title}</td>
                <td>{m.category}</td>
                <td>{m.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MovieList;
