import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';


//Props 타입을 정의해서 사용하면, 해당 컴포넌트를 사용하는 곳에서 해당 컴포넌트의 props를 쉽게 확인할 수 있음.
interface Props {
  linkUrl: string;
  title: string;
  year: string;
  posterPath: string;
  voteAverage: number;
}

//Link 컴포넌트를 styled-components로 감싸서 스타일을 적용할 수 있음.
//Card 컴포넌트 전체를 Link 컴포넌트로 감싸서, 해당 컴포넌트를 클릭하면 linkUrl로 이동하도록 함.
const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin-inline: 10px;
`;

//Card 컴포넌트의 요소들을 묶는 부모 컴포넌트.
const Base = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

//포스터 이미지를 감싸는 부모 컴포넌트.
const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

//포스터 이미지.
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

//포스터 이미지 아래에 위치한 영화 제목, 개봉 연도, 평점 등의 정보를 감싸는 부모 컴포넌트.
const Info = styled.div`
  text-align: left;
  width: 100%;
`;

//영화 제목.
const Title = styled.h4`
  color: #292a32;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  margin-bottom: 3px;
  white-space: nowrap;
  max-width: 200px;
`;

//개봉 연도 혹은 다른 키워드.
const Keyword = styled.div`
  color: #292a32;
  padding-bottom: 1px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

//평점.
const Average = styled.div`
  color: #74747b;
  font-size: 13px;
  font-weight: 400;
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

const SigninForm: React.FC = () => (
  <StyledLink to={"/"}>
    <Base>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <Info>
        <Title>dkdk</Title>
        <Keyword>dkdkd</Keyword>
        <Average>
          <span>
            평균
          </span>
          <span>
            &nbsp;<AiFillStar />
          </span>
          <span>
            dakdslf
          </span>
        </Average>
      </Info>
    </Base>
  </StyledLink>
)

export default SigninForm;