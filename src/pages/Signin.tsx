import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from "@emotion/styled"

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const Signin: React.FC = () => (
  <>
    <Main>
      <Container>
        <Header />

        <Footer />
      </Container>
    </Main>
  </>
)

export default Signin;