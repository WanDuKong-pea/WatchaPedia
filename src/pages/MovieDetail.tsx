import React, { useMemo } from 'react';
import styled from "@emotion/styled";
import {AiOutlinePlus, AiFillEye} from 'react-icons/ai';
import {FaPen} from 'react-icons/fa';
import {FiMoreHorizontal} from 'react-icons/fi';
import {Rating} from "@mui/material"

//MovieDetail 페이지는 쿼리스트링에서 id를 받아와서 해당 id에 맞는 영화 정보를 보여주기 때문에 필요
import {useParams} from 'react-router-dom'

import Header from "../components/Header"
import Footer from "../components/Footer"
import DefaultInfo from '../features/movie/detail/DefaultInfo';
import Similar from '../features/movie/detail/Similar';
import useMovieDetail from '../features/movie/useMovieDetail';
import Comment from '../components/Comment';



const Base = styled.div`
  position: relative;
  background: #f8f8f8;
`;

const TopInfo = styled.div`
  border-bottom: 1px solid rgb(227,227,227);
  background: white;
`;

const PosterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Backdrop = styled.div`
  display: flex;
  width:100%;
  height:394px;
  background-image: linear-gradient(-100deg,raba(0,0,0,0.35) 2%, rgba(0,0,0.2) 70%, rgba(0,0,0,0.5) 100%));
  overflow: hidden;
`;

const LeftBlur = styled.div`
  flex: 1 1 0;
  background: rgb(178,196,229);
`;

const RightBlur = styled.div`
  flex: 1 1 0;
  background: rgb(184,184,184);
`;

const LeftGradient = styled.div`
  width: 150px;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(-90deg, rgba(178,196,229,0) 0%, rgb(178,196,229) 100%);
`;

const RightGradient = styled.div`
  width: 150px;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(+90deg, rgba(184,184,184,0) 0%, rgb(184,184,184) 100%);
`;

const BackdropImage = styled.div<{imageUrl:string}>`
background: url(${({ imageUrl }) => imageUrl}) center center / cover no-repeat;
  width: 1024px;
  position: relative;
  top: auto;
  left: auto;
  height: 100%;
  filter: none;
`;

const PosterWrapper = styled.div`
  position: absolute;
  width: 166px;
  height: 238px;
  border-bottom: solid 2px #fff;
  top: -70px;
  left: 0;
  border-radius: 3px;
  box-shadow: 0 0 2px rgb(0,0,0/30%);
  background: #fff;
`;

//object-fit: cover; 이미지가 잘리지 않고 꽉 채워짐
const Poster = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
`;

const Main = styled.main`
  padding: 14px 16px 22px;
  text-align: center;
`;

//position: relative; 상대적 위치
const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
`;

const ContentWrapper = styled.div`
  margin: 0px 0px 0px 191px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 33px;
  font-weight: 700;
  line-height: 40px;
`;

const Keyword = styled.div`
  font-size: 17px;
  font-weight: 400;
  margin-top: 4px;
  color: rgba(0,0,0,0.5);
`;

const AverageRate = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  padding: 8px 0;
  margin-top: 14px;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
`;

const Actions = styled.div`
  margin-top: 20px;
  height: 58px;
  display: flex;
  align-items: center;
`;

const StarRate = styled.div`
  width:238px;
  height: 57px;
  margin: 0l
  text-align: center;
`;

const StarRateText = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #787878;
  text-align: center;
`;

const RatingWrapper = styled.div`
  margin-top: 8px;
  text-align: center;
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: #ededed;
  float: left;
`;

const ActionButtonContainer = styled.div`
  width: 461px;
  padding: 0 30px;
  margin-top: 0 -16px;
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  border: none;
  background: transparent;
  font-size: 14px;
  margin: 0 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    margin-right: 7px;
    &:hover {
      transform: scale(1.4);
    }
`;

const BottomInfo = styled.div`
    padding: 28px 0 48px;
    max-width: 960px;
    margin: 0 auto;
`;

const ContentSectionContainer = styled.div`
    border-right: 1px solid;
    border-left: 1px solid;
    border-top: 1px solid;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background: #fff;
    border-color: #e3e3e3;
`;

type Params = {
  id: string;
}



const MovieDetail: React.FC = () => {
  //쿼리스트링에서 id를 받아옴
  const {id} = useParams<Params>() as Params;

  //useMovieDetail custom hook으로 id값을 넘겨 데이터를 받아옴
  const {isLoading, data} = useMovieDetail(id);

  const year = useMemo(() => {
    return data?.data.release_date?.split("-")[0] || "";
  }, [data]);

  const genres = useMemo(() => {
    return data?.data.genres?.map(genre => genre.name).join('/') || "";
  }, [data]);
  
  return (
    <Base>
      <Header />
      {
        isLoading || !data? (
          <div>Loading...</div>
        ) :(
          <> 
            <TopInfo>
              <PosterContainer>
                  <Backdrop>
                    <LeftBlur />
                    <BackdropImage imageUrl={`${process.env.REACT_APP_IMAGE_PREFIX}/${data.data.backdrop_path}`}>
                      <LeftGradient />
                      <RightGradient />
                    </BackdropImage>
                    <RightBlur />
                  </Backdrop>
              </PosterContainer>
              
              <Main>
                <Container>
                  <PosterWrapper>
                    <Poster src={`${process.env.REACT_APP_IMAGE_PREFIX}/${data.data.poster_path}`}/>
                  </PosterWrapper>
                  <ContentWrapper>
                    <Title>{data.data.title}</Title>
                    <Keyword>{year} / {genres}</Keyword>
                    <AverageRate>평균 *{data.data.vote_average} ({data.data.vote_count}명)</AverageRate>
                    <Actions>
                      <StarRate>
                        <StarRateText>평가하기</StarRateText>
                        <RatingWrapper>
                            <Rating />
                        </RatingWrapper>
                      </StarRate>
                      <Divider />
                      <ActionButtonContainer>
                        <ActionButton>
                          <AiOutlinePlus />보고싶어요
                        </ActionButton>
                        <ActionButton>
                          <FaPen />코멘트
                        </ActionButton>
                        <ActionButton>
                          <AiFillEye />보는중
                        </ActionButton>
                        <ActionButton>
                          <FiMoreHorizontal />더보기
                        </ActionButton>
                      </ActionButtonContainer>
                    </Actions>
                  </ContentWrapper>
                </Container>
              </Main>
            </TopInfo>
            <BottomInfo>
              <ContentSectionContainer>
                <DefaultInfo 
                 title={data.data.title} 
                 year={year} 
                 genres={genres} 
                 runtime={data.data.runtime} 
                 overview={data.data.overview}
                />
                <Comment />
                <Similar id={id} />
              </ContentSectionContainer>
            </BottomInfo>
          </>
        )
      }  
      <Footer />
    </Base>
  );
}

export default MovieDetail;