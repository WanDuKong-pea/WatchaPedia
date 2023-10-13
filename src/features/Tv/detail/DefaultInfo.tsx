import React from 'react';
import styled from "@emotion/styled";  

const Base = styled.div`
   padding: 11px 15px;
   border-bottom: 1px solid #ededed;
`;

const HeaderWrapper = styled.div``;  

//justify-content: space-between;의 의미:
    //첫번째 자식 요소를 왼쪽으로, 마지막 자식 요소를 오른쪽으로 배치하고 나머지 요소들은 사이에 공간을 동일하게 배분.
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Link = styled.a`
    text-decoration: none;
    color: #ff2f6e;
`;

const Title = styled.h2`
    color: #000;
    font-size: 19px;
    font-weight: 700;
    margin: 8px 0;
`;

const Summary = styled.div`
    color: #4a4a4a;
    font-size; 15px;
    font-weight: 400;
    line-height: 24px;
`;

const MoraeSee = styled.div``;

interface Props {
    title: string;
    year: string;
    genres: string;
    overview: string;
}


const DefaultInfo: React.FC<Props> = ({
    title, year, genres, overview

                                }) => {

    return (
        <Base>
            <HeaderWrapper>
                <Header>
                    <Title>{title}</Title>
                    <Link href="">
                        더보기
                    </Link>
                </Header>
                <Summary>
                    {title}
                    <br />
                    {year} / {genres}
                    <br />
                    <br />
                    {overview}
                </Summary>
            </HeaderWrapper>
        </Base>
        
    )
}

export default DefaultInfo;