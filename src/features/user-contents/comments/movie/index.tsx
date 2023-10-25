import React from 'react';
import styled from '@emotion/styled';
import useCommentsMovie from './useCommentsMovie';
import MovieGridContainer from '../../../../components/MovieGridContainer';

const BaseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ConteinerItem = styled.div`
    width: calc(16.5% - 9px);
    margin: 3px;
    padding-top: 20px;
    padding-bottom: 20px;
`;



const CommentsMovie: React.FC = () => {
  const { data: commentsMovieResponse, isLoading } = useCommentsMovie();

  return (
    <>
        <MovieGridContainer response={commentsMovieResponse} isLoading={isLoading}/>
    </>
  )
}

export default CommentsMovie;