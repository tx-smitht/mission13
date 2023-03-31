import React from 'react';
import mystyle from './Blah.module.css';

function TopBanner({ saying }: any) {
  // Saying is a prop that is being set where we are calling this function.
  // (In the app.tsx in this case). Could use "props" if there were multiple
  // Props to be used
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="company logo" />
        </div>

        <div className="col align-self-center text-start">
          <h1>{saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
