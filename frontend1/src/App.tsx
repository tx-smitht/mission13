import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopBanner from './Blah';
import MovieList from './movies/MovieList';
import HomeInfo from './HomeInfo';
import SiteHeader from './Header';

function Home() {
  return (
    <div className="App">
      <SiteHeader></SiteHeader>
      <HomeInfo></HomeInfo>
    </div>
  );
}

function Podcasts() {
  return (
    <div className="App">
      <SiteHeader></SiteHeader>
      <h1>Welcome to the Podcast Page</h1>
      <a href="https://baconsale.com">Check Out My Podcasts</a>
    </div>
  );
}

function MoviePage() {
  return (
    <div className="App">
      <SiteHeader></SiteHeader>
      <MovieList></MovieList>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
        <Route path="/podcasts" element={<Podcasts></Podcasts>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
