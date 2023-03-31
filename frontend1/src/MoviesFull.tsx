import { useState } from 'react';
import data from './MovieData.json';

const AllMovieList = data.MovieData;

function FullMovieList() {
  const [fullList, setList] = useState(AllMovieList);

  return (
    <>
      <div>
        <h3>Joel Hilton Movie Colleciton</h3>
        <p>Here's a collection of Joel's Movies. Please, enjoy.</p>
      </div>
      <div
        className="row justify-content-center"
        style={{ textAlign: 'center' }}
      >
        <table
          className="table table-striped table-responsive"
          style={{ width: '60%' }}
        >
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Director</th>
              <th scope="col">Rating</th>
              <th scope="col">Category</th>
              <th scope="col">Edited</th>
            </tr>
          </thead>
          <tbody>
            {fullList.map((m) => (
              <tr key={m.MovieId}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FullMovieList;
