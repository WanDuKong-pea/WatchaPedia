import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TvPage from './pages/TvPage';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';
import MyPage from './pages/MyPage';
import WatchedPage from './pages/WatchedPage';
import LikePage from './pages/LikePage';
import CommentsPage from './pages/CommentsPage';
import AllUserMoviePage from './pages/AllUserMoviePage';
import AllUserTVPage from './pages/AllUserTVPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/tv/:id" element={<TvDetail />} />
        <Route path="/user" element={<MyPage />} />
        <Route path="/user/watched" element={<WatchedPage />} />
        <Route path="/user/like" element={<LikePage />} />
        <Route path="/user/comments" element={<CommentsPage />} />
        <Route path="/user/movie" element={<AllUserMoviePage />} />
        <Route path="/user/tv" element={<AllUserTVPage />} />
      </Routes>
    </Router>
  );
}

export default App;
