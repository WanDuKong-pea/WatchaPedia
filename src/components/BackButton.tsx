import React from 'react';
import styled from '@emotion/styled';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


const BackIconButton = styled.button`
    margin:1px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 47, 110);
    border: 0px;
    background-color: white;
    cursor: pointer;
`;

interface BackButtonProps {
    size: number;
}

const BackButton: React.FC<BackButtonProps> = ({size}) => {
    const navigate = useNavigate();
    const onClickBtn = () => {
        navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
    };

    return(
        <>
            <BackIconButton onClick={onClickBtn}>
                <IoMdArrowRoundBack size={size} />
            </BackIconButton>
        </>
    );
}

export default BackButton;