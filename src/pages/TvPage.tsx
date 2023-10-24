import React from 'react';
import styled from "@emotion/styled"

import Header from '../components/Header';
import Footer from '../components/Footer';

import LatestTvSection from '../features/Tv/latest';
import AiringTodayTvSection from '../features/Tv/airingToday';
import TopRateTvSection from '../features/Tv/topRate';
import OnTheAirTvSection from '../features/Tv/onTheAir';
import PopularTvSection from '../features/Tv/popular';

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


const TvPage: React.FC = () => {
  return (
    <Base>
      <Header />
        <Main>
          <Container>
            <LatestTvSection />
            <AiringTodayTvSection />
            <OnTheAirTvSection />
            <PopularTvSection />
            <TopRateTvSection />
          </Container>
        </Main>
      <Footer />
    </Base>
  );
}

export default TvPage; 