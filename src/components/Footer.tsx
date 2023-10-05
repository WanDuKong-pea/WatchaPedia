import React from "react";
import styled from "@emotion/styled";

//display: block => 요소를 블록 레벨 요소로 지정
//여기서 블록 레벨이란, 해당 요소가 화면의 한 줄을 다 차지한다는 의미
//box-sizing: border-box => width와 height를 지정했을 때,
    //해당 요소의 padding과 border를 포함한 총 너비와 높이를 지정
const Base = styled.footer`
    display: block;
    box-sizing: border-box;
    width: 100%;
`;

//section 태그는 주로 콘텐츠를 그룹화하고 구획을 나누는 데 활용
const Section = styled.section`
    background-color: #1c1d1f;
`;

//지금까지 평가된 콘텐츠의 숫자를 표시할 영역
//line-height: 62px; => 줄 높이를 지정(줄간 간격)
const Statistics = styled.section`
    background: #101113;
    width: 100%;
    height: 62px;
    line-height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Summary = styled.span`
    color: #d1d1d2;
    font-size: 19px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
`;

//em 태그는 일반적으로 이탤릭체로 텍스트를 표시하며, 
    //해당 텍스트를 읽는 독자나 브라우저에게 중요한 부분임을 강조하기 위해 사용
const Emphasis = styled.em`
    color: ##ff0558;
    font-size: 19px;
    font-weight: 500;
    line-height: 22px;
`;

const Container = styled.section`
    background: #1c1d1f;
    padding: 28px 0 38px;
`;

const ContentWrapper = styled.div`
    display: flex;
    margin: 0 60px;
`;

const Left = styled.div``;

const Right = styled.div``;

const TermAndPolicy = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

//display: inline-block => 요소를 인라인 레벨 요소로 지정
    //여기서 인라인 레벨이란, 해당 요소가 화면의 한 줄을 다 차지하지 않는다는 의미
//vertical-align: top => 요소의 수직 정렬 방식을 지정
//last-of-child와 last-of-type의 차이점 
    //last-of-child는 해당 요소의 부모 요소의 자식 요소 중 마지막 요소를 선택하고
    //last-of-type은 해당 요소의 태그 이름을 기준으로 마지막 요소를 선택
//&:after => 선택한 요소의 가상 요소를 지정
    //여기서 가상 요소란, 존재하지 않는 요소를 CSS로 생성하는 방법
    //content: ""로 지정하면 가상 요소에 내용이 추가되지 않음
//&:not(:last-of-type) => 선택한 요소의 태그 이름을 기준으로 마지막 요소를 제외한 모든 요소를 선택
//&:not(:last-of-type) ~ 부분의 코드는 수평선을 만드는 코드
const TermAndPolicyItem = styled.li`
    display: inline-block;
    color: #a5a5a7;
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
    vertical-align: top;
    cursor: pointer;

    &:not(:last-of-type){
        &:after{
            content: "";
            display: inline-block;
            backgrount: #848485;
            vertical-align: top;
            width: 1px;
            height: 12px;
            margin: 5px 0px 0;
        }
    }    
`;


const Footer: React.FC = () => {
    return (
        <Base>
            <Section>
                <Statistics>
                    <Summary>
                        지금까지&nbsp;
                        <Emphasis>644,934,343 개의 평가가</Emphasis>
                        &nbsp;등록되었습니다.
                    </Summary>
                </Statistics>
                <Container>
                    <ContentWrapper>
                        <Left>
                            <TermAndPolicy>
                            <TermAndPolicyItem>서비스 이용약관</TermAndPolicyItem>
                            <TermAndPolicyItem>개인정보 처리방침</TermAndPolicyItem>
                            <TermAndPolicyItem>회사 정보</TermAndPolicyItem>
                            </TermAndPolicy>
                        </Left>
                        <Right />
                    </ContentWrapper>
                </Container>
            </Section>
        </Base>
    );
}

export default Footer;
