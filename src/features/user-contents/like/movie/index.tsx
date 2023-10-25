import React from 'react';
import styled from '@emotion/styled';
import useLikeMovie from './useLikeMovie';
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



const LikeMovie: React.FC = () => {
  const { data: likeMovieResponse, isLoading } = useLikeMovie();

  return (
    <>
        <MovieGridContainer response={likeMovieResponse} isLoading={isLoading}/>
    </>
  )
}

export default LikeMovie;