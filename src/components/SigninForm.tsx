import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { log } from 'console';



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

const LoginButton = styled.button`
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

const LoginLogo = styled.h3`
    margin: 10px 0px 15px 0px;
`;

const PointTextLink = styled.div`
    display: block;
    margin: 10px;
    cursor: pointer;
`;

const ServerErrorText = styled.div`
    width: 330px;
    background-color: rgba(0,0,0,0.08);
    color: red;
    font-size: 14px;
    font-weight: 600;
    margin: 2px 0px 0px 0px;
    padding: 5px;
`;

interface SigninFormProps {
    onRequestClose: () => void;
    isSignUpModalOpen: boolean;
    setIsSignUpModalOpen: Dispatch<SetStateAction<boolean>>;
    signUpSuccess?: boolean;
}

const SigninForm: React.FC<SigninFormProps> =({
    onRequestClose, 
    isSignUpModalOpen, 
    setIsSignUpModalOpen,
    signUpSuccess,
}) => { 
    const [loginEmail, setLoginEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [serverError, setServerError] = useState<string>('');

    const {login} = useAuth();

    const nav = useNavigate();

    const user = { loginEmail, password };

    const openSignupModal = ():void => {
        setIsSignUpModalOpen(true);
        onRequestClose();
    };

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/watcha-pedia/server/api/user/sign-in', user, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            // 성공적으로 로그인한 경우 처리
            if (response.status === 200) {
              console.log(response.data);
              login(response.data.sessionId);
              // MainPage로 이동
              onRequestClose();
              nav('/');

            } //로그인 실패한 경우 처리
          } catch (error: any) {
            if(error.response.status === 401){
                setServerError(error.response.data.saveError);
            }else if(error.response.status === 400){
                setServerError(error.response.data.saveError);
            }else{
                console.log(error);
            }
          }

    }

    return(
        <Base>
            <PointText>
                <span className='primary'>{signUpSuccess?"가입을 축하합니다.":""}</span>
            </PointText> 
        <Form onSubmit={handleSubmit}>
        <LoginLogo>Login</LoginLogo>
        <Input 
            id="email" 
            type="email" 
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)} 
        />
        <Input 
            id="password" 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
        />
        <LoginButton type="submit">Login</LoginButton>
        <ServerErrorText>{serverError}</ServerErrorText>
        </Form>
        <PointTextLink>
            <PointText>
                <span className='primary'>Forgot password?</span>
            </PointText>
        </PointTextLink>
        <PointTextLink onClick={openSignupModal}>
            <PointText>
                <span>Don't have an account?</span>
                <span className='primary'>Sign up</span>
            </PointText>
        </PointTextLink>
        <Line />
        <PointText>
                <span>Tip: Do you have Watcha accout? You can use the same account!</span>
        </PointText>
        
        </Base>
    )
}
export default SigninForm;