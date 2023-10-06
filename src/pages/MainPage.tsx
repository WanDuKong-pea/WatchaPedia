import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

import LatestMovieSection from '../features/movie/latest';
import NowPlayingSection from '../features/movie/nowPlaying';


const MainPage: React.FC = () => (
  <>
    <Header />
    <LatestMovieSection />
    <NowPlayingSection />
    <Footer />
  </>
)

export default MainPage;