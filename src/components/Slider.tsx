import React from "react";
import ReactSlick, {Settings} from "react-slick";
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {MdArrowBackIos, MdArrowForwardIos} from "react-icons/md"

//&:before: 버튼의 가상 요소인 before에 스타일을 설정하는 부분. 
    //content: initial;을 사용하여 가상 요소의 내용을 초기화
//> svg: 버튼 내부에 있는 svg 요소에 스타일을 설정하는 부분.
//& => 부모 요소를 가리킴. 즉, ArrowButton 컴포넌트를 가리킴
//css `...` => css 함수를 사용하여 스타일을 설정하는 부분.
    //Emotion 라이브러리의 css 함수는 CSS 스타일을 동적으로 생성하고 적용하는 데 사용
    //transform은 요소의 위치를 변형시키는 CSS 속성 중 하나이며, 
    //translate(-50%, -50%)는 주로 요소를 수평 및 수직으로 중앙 정렬하기 위해 사용
const ArrowButton = styled.button<{pos?: "left" | "right"}>`
    padding: 16px;
    box-shadow: 0px 2px 5px raba(0,0,0,0.1);
    boarder-radius: 50%;
    z-index: 1;
    top: 50%;
    background-color: #fff;
    ${({pos}) => pos === "left" ? css `left: 0; transform: translate(-50%,-50%)` : css `right: 0, transform: translate(50%,-50%)`}
    &:before {
        content: initial;
    }
    > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        color: #222;
    }
`;

//Settings => Slider에 옵션으로 들어갈 객체
const DEFAULT_SETTINGS: Settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipe: true,
    draggable: true,
    prevArrow: (
        <ArrowButton>
            <MdArrowBackIos />
        </ArrowButton>
    ),
    nextArrow: (
        <ArrowButton>
            <MdArrowForwardIos />
        </ArrowButton>
    ),
    
};


//보통 React에서 함수형 컴포넌트를 정의할 때는 React.FC를 사용하여 컴포넌트의 props 타입을 자동으로 추론
//하지만 아래와 같이 Props라는 인터페이스를 정의하고 사용하면, 해당 컴포넌트의 props 타입에 대한 
//더 나은 문서화와 타입 검사가 가능해짐. 또한 Props 인터페이스를 재사용하거나 공유할 수 있게 됩
interface Props {
    settings?: Settings;
}

//settings는 기본적으로 DEFAULT_SETTINGS를 사용하도록 설정
//settings를 받아오는 props가 있다면 해당 props를 사용
const Slider: React.FC<Props> = ({settings = DEFAULT_SETTINGS},children) => {
    return (
        //"..." 연산자는 JavaScript 및 TypeScript에서 객체나 배열의 속성을 확장하거나 병합할 때 사용.
        //<ReactSlick {...settings}> 부분에서 {...settings}는 settings 객체의 모든 속성을 
        //해당 위치에 확장(전개)하는 역할. 
        //즉, settings 객체에 정의된 모든 프로퍼티와 값을 <ReactSlick> 컴포넌트의 props로 전달
        <ReactSlick {...settings}>
            {children}
        </ReactSlick>
    );
}

export default Slider;