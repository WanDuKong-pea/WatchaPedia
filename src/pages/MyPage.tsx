import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

import styled from "@emotion/styled"
import UserInfo from '../components/UserInfo';
import BackButton from '../components/BackButton';
const Base = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const MyPage: React.FC = () => (
  <Base>
    <Header />
        <Main>
            <Container>
                <UserInfo />
            </Container>
        </Main>
    <Footer />
  </Base>
)

export default MyPage;