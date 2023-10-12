import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

import LatestMovieSection from '../features/movie/latest';
import NowPlayingSection from '../features/movie/nowPlaying';
import PopularMovieSection from '../features/movie/popular';
import TopRateMovieSection from '../features/movie/topRate';
import UpcomingMovieSection from '../features/movie/upcoming';


const MainPage: React.FC = () => (
  <>
    <Header />
    <LatestMovieSection />
    <NowPlayingSection />
    <PopularMovieSection />
    <TopRateMovieSection />
    <UpcomingMovieSection />
    <Footer />
  </>
)

export default MainPage;