import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

import styled from "@emotion/styled"
import AllUserTVList from '../features/user-contents/all-tv';
import BackButton from '../components/BackButton';
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

const TextLogo = styled.p`
    margin-left:10px;
    margin-top:0px;
    margin-bottom: 0px;
    font-size: 22px;
    font-weight: 700;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 10px 15px 10px;
`;

const AllUserTVPage: React.FC = () => {

    return (
        <Base>
            <Header />
            <Main>
            <Container>
            <BackButton size={30} />
            <TextLogo>Your TV Collection</TextLogo>    
            <ContentWrapper>
                <AllUserTVList />
            </ContentWrapper>
            </Container>
            </Main>
            <Footer />
        </Base>
    );
}

export default AllUserTVPage;