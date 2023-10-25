import React, {useState} from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

import styled from "@emotion/styled"
import CommentsMovie from '../features/user-contents/comments/movie';
import CommentsTV from '../features/user-contents/comments/tv';
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

const ButtonWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    height: 40px;
    flex-direction: row;
    margin-top: 20px;
`;

const KindButton = styled.button`
    width: 130px;
    height: 100%;
    background-color: white;
    border: 0px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    &.selected{
        color: rgb(255, 47, 110);
        border-bottom: 2px solid rgb(255, 47, 110);
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 10px 15px 10px;
`;

const CommentsPage: React.FC = () => {
    const [isMovie, setIsMovie] = useState<boolean>(true);

    return (
        <Base>
            <Header />
            <Main>
            <Container>
            <BackButton size={30} />
            <TextLogo>Titles you commented on</TextLogo>    
            <ButtonWrapper>
                <KindButton className={isMovie?'selected':''} onClick={() => setIsMovie(true)}>Movie</KindButton>
                <KindButton className={isMovie?'':'selected'} onClick={() => setIsMovie(false)}>TV</KindButton>
            </ButtonWrapper>
            <ContentWrapper>
                {isMovie ? <CommentsMovie /> : <CommentsTV />}
            </ContentWrapper>
            </Container>
            </Main>
            <Footer />
        </Base>
    );
}

export default CommentsPage;