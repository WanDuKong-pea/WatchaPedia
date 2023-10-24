import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {BiMovie, BiSolidUserCircle } from 'react-icons/bi'
import {PiTelevisionSimpleDuotone} from 'react-icons/pi'


const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 710px;
`;

const UserInfoDiv = styled.div`
    display: flex;
    width: 600px;
    height: 300px;
    background-color: white;
    flex-direction: column;
    align-items: center;
    margin: 50px 0px 20px 0px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    overflow: 
`;

const UserInfoWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    background-color: white;
    flex-direction: column;
    margin: 10px;
    border-radius: 4px;
`;

const UserInformation = styled.div`
    width: 200px;
    margin-top:10px;
    margin-left: 20px;
`;

const ArchiveDiv = styled.div`
    display: flex;
    width: 600px;
    height: 200px;
    background-color: white;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    display: flex;
    width: 600px;
    height: 100px;
    background-color: white;
    flex-direction: row;
    align-items: center;
    margin: 0px;
    border-radius: 4px;
    overflow: 
`;

const ButtonCard = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    background-color: white;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 0px;
    border-radius: 4px;
    cursor: pointer;
`;

const ArchiveButton = styled.button`
    margin-bottom: 0px;
    width: 100%;
    height: 30px;
    border: 0px;
    background-color: white;
    font-size: 16px;
    font-weight: 700;
`;

const ArchieveIconsBox = styled.div`
    margin-top: 10px;
    padding-top: 15px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.3);
`;

const ArcheiveLogo = styled.h3`
    font-weight: 700;
`;

const H3 = styled.h3`
    font-weight: 700;
    margin: 0px;
`;

const PlainText = styled.p`
    font-weight: 400;
    font-size: 15px;
    margin: 0px;
    color: rgba(0, 0, 0, 0.7);
`;

const Line = styled.hr`
    width: 95%;
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

const UserInfo: React.FC = () => (
    <Base>
        <UserInfoDiv>
            <UserInfoWrapper>
                <UserInformation>
                    <BiSolidUserCircle size="130" />
                    <H3>User</H3>
                    <PlainText>test@test.com</PlainText>
                </UserInformation>
                <Line />
                <ButtonWrapper>
                    <ButtonCard>
                        <H3>0</H3>
                        <StyledLink to="/">
                        <PlainText>Watched</PlainText>
                        </StyledLink>
                    </ButtonCard>
                    <ButtonCard>
                        <H3>0</H3>
                        <StyledLink to="/">
                        <PlainText>Like</PlainText>
                        </StyledLink>
                    </ButtonCard>
                    <ButtonCard>
                        <H3>0</H3>
                        <StyledLink to="/">
                        <PlainText>Comments</PlainText>
                        </StyledLink>
                    </ButtonCard>
                </ButtonWrapper>
            </UserInfoWrapper>
        </UserInfoDiv>
        <ArchiveDiv>
            <ArcheiveLogo>Archieve</ArcheiveLogo>
            <ButtonWrapper>
                    <ButtonCard>
                            <ArchieveIconsBox>
                                <BiMovie size="30" />
                            </ArchieveIconsBox>
                        <StyledLink to="/">
                            <ArchiveButton>Movie</ArchiveButton>
                        </StyledLink>
                    </ButtonCard>
                    <ButtonCard>
                        <ArchieveIconsBox>
                            <PiTelevisionSimpleDuotone size="30" />
                        </ArchieveIconsBox>
                        <StyledLink to="/">
                            <ArchiveButton>TV</ArchiveButton>
                        </StyledLink>
                    </ButtonCard>
            </ButtonWrapper>
        </ArchiveDiv>
    </Base>
)

export default UserInfo;