import React from 'react';
import myImage from './1 (1).jpg';
function HomeInfo() {
  return (
    <>
      <h1>Welcome to the Joel Hilton Movie Website</h1>
      <img src={myImage} alt="joel" />
      <br />
      <br />
      <p>
        Learn about Joel Hilton and his awesome movie collection. Also featured
        is his podcast website.
      </p>
    </>
  );
}

export default HomeInfo;
