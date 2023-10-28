import React,{Dispatch, SetStateAction, useState} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

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

const Line = styled.hr`
    border: 0.5px solid rgb(0,0,0,0.1);
    margin: 10px 0px;
    width: 350px;
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

const ErrorText = styled.div`
    width: 330px;
    text-align: left;
    color: red;
    font-size: 12px;
    margin: 2px 0px 0px 0px;
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

const PointTextLink = styled.div`
  display: block;
  margin: 10px;
  cursor: pointer;
`;

interface SignupFormProps { 
    onRequestClose: () => void;
    isSignInModalOpen: boolean;
    setIsSignInModalOpen: Dispatch<SetStateAction<boolean>>;
    setSignUpSuccess: Dispatch<SetStateAction<boolean>>;
}

const SignupForm: React.FC<SignupFormProps> = ({
        onRequestClose, 
        isSignInModalOpen, 
        setIsSignInModalOpen,
        setSignUpSuccess
    }) => {
    const [name, setName] = useState<string>('');
    const [loginEmail, setLoginEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');

    const [nameError, setNameError] = useState<string>('');
    const [loginEmailError, setLoginEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [serverError, setServerError] = useState<string>('');

    const openSigninModal = ():void => {
        setIsSignInModalOpen(true);
        onRequestClose();
    };

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        
       
        const user = { name, loginEmail, password };

        if (!name) {
            setNameError('이름을 입력해주세요.');
            return;
        }
          
        if (!loginEmail) {
            setLoginEmailError('이메일을 입력해주세요.');
            return;
        }
          
        const isVaildPassword = (password:string):void=> {
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
            if (!password) {
              setPasswordError('비밀번호를 입력해주세요.');
            } else if (!passwordRegex.test(password)) {
              setPasswordError('비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
            } else if (/\s/.test(password)) {
              setPasswordError('비밀번호는 공백 없이 입력해주세요.');
            } else {
              setPasswordError(''); // 에러 메시지 초기화
            }
        };

        isVaildPassword(password);
        setNameError('');
        setLoginEmailError(''); // 에러 메시지 초기화

        try {
          const response = await axios.post('http://localhost:8080/watcha-pedia/server/api/user/sign-up', user, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          // 성공적으로 회원가입한 경우 처리
          if (response.status === 200) {
            console.log(response.data)
            setSignUpSuccess(true);
            // 로그인 모달로 이동
            
            openSigninModal();
          } // 회원가입 실패한 경우 처리
        } catch (error: any) {
          if(error.response.status === 401){
            setServerError(error.response.data.saveError);;
          }else{
          console.log(error);
          }
        }
      };
    return(
    <Base>
        <Form onSubmit={handleSubmit}>
        <SignupLogo>Sign Up</SignupLogo>
        <Input 
            id="name" 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <ErrorText>{nameError}</ErrorText>
        <Input 
            id="email" 
            type="email" 
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)} 
        />
        <ErrorText>{loginEmailError}</ErrorText>
        <Input 
            id="password" 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
        />
        <ErrorText>{passwordError}</ErrorText>
        <SignupButton type="submit">Sign Up</SignupButton>
        <ServerErrorText>{serverError}</ServerErrorText>
        </Form>
        <Line />
        <PointTextLink>  
          <PointText onClick={openSigninModal}>
              <span>Already have an account?</span>
              <span className='primary'>Login</span>
          </PointText>
        </PointTextLink>
    </Base>
    );
}
export default SignupForm;