import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';



//Link 컴포넌트를 styled-components로 감싸서 스타일을 적용할 수 있음.
//Card 컴포넌트 전체를 Link 컴포넌트로 감싸서, 해당 컴포넌트를 클릭하면 linkUrl로 이동하도록 함.
const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin: 10px;
`;

const Base = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;;
    width: 370px;
    height: 400px;
`;

const Input = styled.input`
    margin: 5px 0px;
    width: 330px;
    height: 28px;
    border: 0px;
    background: rgb(0,0,0,0.06);
    padding: 10px;
    object-fit: cover;
    border-radius: 4px;
`;

const SignupButton = styled.button`
    width: 350px;
    height: 50px;
    margin: 15px 0px;
    padding: 10px;
    text-align: center;
    background-color: rgb(255,47,110);
    border: 0px;  
    border-radius: 4px;
    color: white;
    font-weight: 600;
    font-size: 16px;
`;

const PointText = styled.span`
    font-weight: 499;
    font-size: 16px;
    > span[class="primary"]{
        color: rgb(255,47,110);
    }
    > span:not(.primary){
        color:rgb(0,0,0,0.4);
    }
`;

const Line = styled.hr`
    border: 0.5px solid rgb(0,0,0,0.1);
    margin: 10px 0px;
    width: 350px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0px;
`;

const SignupLogo = styled.h3`
    margin: 0px 0px 15px 0px;
`;

const SignupForm: React.FC = () => (
    <Base>
    <Form>
      <SignupLogo>Sign Up</SignupLogo>
      <Input id="name" type="name" placeholder="Name" />
      <Input id="email" type="email" placeholder="Email" />
      <Input id="password" type="password" placeholder="Password" />
      <SignupButton type="submit">Sign Up</SignupButton>
    </Form>
      <StyledLink to="/">
        <PointText>
            <span>Already have an account?</span>
            <span className='primary'>Login</span>
        </PointText>
      </StyledLink>   
    </Base>
)

export default SignupForm;