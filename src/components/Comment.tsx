import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ededed;
    background: #fff;
    border-color: #e3e3e3;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const InputWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin: 0px 2px 10px 2px;
`;

const CommentWriter = styled.div`
    width: 90px;
    margin-right: 5px;
    background: rgb(0,0,0,0.06);
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    padding: 11px;
    border-radius: 4px;
`;

const Input = styled.input`
    width: 100%;
    border: 0px;
    background: rgb(0,0,0,0.06);
    padding: 10px;
    object-fit: cover;
    border-radius: 4px;
    &:focus{
        outline: none;
    }
    &.commentInput{
        font-weight: 500;
        &:focus{
            outline: rgb(255,47,110) auto 1px;
        }
    }
`;

const CreateCommnetButton = styled.button`
    width: 90px;
    margin-left: 5px;
    background: rgb(255,47,110);
    text-align: center;
    padding: 11px;
    border-radius: 4px;
    border: 0px;
    color: white;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0px;
`;



const CommentLogo = styled.h3`
    margin: 0px 0px 15px 0px;
`;

const Comment: React.FC = () => {
    return (
        <Base>
        <CommentLogo>Comment</CommentLogo>
        <Form>
          <InputWrapper>
            <CommentWriter>Writer</CommentWriter>
            <Input id="name" type="name" placeholder="comment" readOnly/>
          </InputWrapper>
          <InputWrapper>
            <CommentWriter>Writer</CommentWriter>
            <Input id="name" type="name" placeholder="comment" readOnly/>
          </InputWrapper>
          <InputWrapper>
            <CommentWriter>Writer</CommentWriter>
            <Input id="name" type="name" placeholder="comment" readOnly/>
          </InputWrapper>
          <InputWrapper>
            <CommentWriter>Writer</CommentWriter>
            <Input id="name" type="name" placeholder="comment" readOnly/>
          </InputWrapper>
          <InputWrapper>
            <CommentWriter>Writer</CommentWriter>
            <Input id="name" type="name" placeholder="comment" readOnly/>
          </InputWrapper>
          <InputWrapper>
            <Input className="commentInput" id="name" type="name" placeholder="write comment" />
            <CreateCommnetButton type="submit">Enter</CreateCommnetButton>
          </InputWrapper>
        </Form>
        </Base>
    )
}

export default Comment;