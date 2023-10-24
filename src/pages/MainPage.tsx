import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

import LatestMovieSection from '../features/movie/latest';
import NowPlayingSection from '../features/movie/nowPlaying';
import PopularMovieSection from '../features/movie/popular';
import TopRateMovieSection from '../features/movie/topRate';
import UpcomingMovieSection from '../features/movie/upcoming';
import styled from "@emotion/styled"
const Base = styled.div`
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const MainPage: React.FC = () => (
  <Base>
    <Header />
    <Main>
      <Container>
        <LatestMovieSection />
        <NowPlayingSection />
        <PopularMovieSection />
        <TopRateMovieSection />
        <UpcomingMovieSection />
      </Container>
    </Main>
    <Footer />
  </Base>
)

export default MainPage;