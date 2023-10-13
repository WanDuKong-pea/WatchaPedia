import React from "react";
import styled from "@emotion/styled";
import useSimilarTv from "../useSimilarTv";

//---------------Similar 컴포넌트 관련---------------//
//Styled Components
const Base = styled.div`
    padding: 11px 15px;
    border-bottom: 1px solid #ededed;
`;

const HeaderWrapper = styled.div``;

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    color: #000;
    font-size: 19px;
    font-weight: 700;
    margin: 8px 0;
`;

//display: grid; grid-template-columns: repeat(5,1fr);의 의미:
    //한 행에 5개의 열을 만들고 각 열의 너비는 1fr로 설정.
    //1fr은 사용 가능한 공간을 5등분한 값.
const ContentsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    margin-top: 15px;
    row-gap: 124px;
`;

interface Props {
    id: string;
}
//---------------/Similar 컴포넌트 관련--------------//

//-------------SimilarMovie 컴포넌트 관련------------//
//Styled Components
const Link = styled.a`
    text-decoration: none;
    color: black;
`;

const CardContainer = styled.div`
    width: 140px;
`;

//white-space: nowrap;의 의미:
//텍스트가 너무 길어서 한 줄에 다 표시할 수 없을 때, 
//줄 바꿈 없이 한 줄로 표시.
//text-overflow: ellipsis;의 의미:
//텍스트가 너무 길어서 한 줄에 다 표시할 수 없을 때,
//줄 바꿈 없이 한 줄로 표시하고, 너무 길어서 표시하지 못한 텍스트는 생략.
const CardTitle = styled.div`
    color: rgb(41,42,50);
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const PosterWrapper = styled.div`
    width: 140px;
    height: 204px;
    border: 1px solid rgb(234,233,232);
`;

//vertical-align: top;의 의미:
//이미지의 상단을 기준으로 정렬.
const Poster = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    vertical-align: top;
    object-fit: cover;
`;

const Info = styled.div`
    margin: 5px 10px 0px 0px;
`;

const VoteAverage = styled.div`
    margin-top: 2px;
    color: rgb(120,120,120);
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

//컴포넌트의 Props
interface SimilarTvProps {
    id: number;
    posterPath: string;
    title: string;
    voteAverage: number;
}
//------------/SimilarMovie 컴포넌트 관련------------//

//SimilarMovie 컴포넌트
const SimilarTv: React.FC<SimilarTvProps> = ({
    id, posterPath, title, voteAverage
}) =>{
    return (
        <Link href={`/tv/${id}`} target="_blank">
            <CardContainer>
                <PosterWrapper>
                    <Poster src={`${process.env.REACT_APP_IMAGE_PREFIX}/${posterPath}`}/>
                </PosterWrapper>
                <Info>
                    <CardTitle>{title}</CardTitle>
                    <VoteAverage>{voteAverage}</VoteAverage>
                </Info>
            </CardContainer>
        </Link>
    )
}

//Similar 컴포넌트
const Similar: React.FC<Props> = ({id}) => {

    const { isLoading, data } = useSimilarTv(id);

    return (
        <Base>
            <HeaderWrapper>
                <Header>
                    <Title>비슷한 작품</Title>
                </Header>
            </HeaderWrapper>
            <ContentsWrapper>
                {
                    isLoading || !data ? (
                        <div>Loading...</div>
                    ):(
                        data.data.results.map(result => (
                            <SimilarTv 
                                key={result.id}
                                id={result.id}
                                posterPath={result.poster_path}
                                title={result.name}
                                voteAverage={result.vote_average}
                            />
                        ))
                    )
                }
            </ContentsWrapper>
        </Base>
    );
}

export default Similar;