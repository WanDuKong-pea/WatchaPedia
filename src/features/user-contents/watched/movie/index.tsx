import React from 'react';
import styled from '@emotion/styled';
import Card from '../../../../components/Card';
import useWatchedMovie from './useWatchedMovie';
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



const WatchedMovie: React.FC = () => {
  const { data: watchedMovieResponse, isLoading } = useWatchedMovie();

  return (
    <>
        <MovieGridContainer response={watchedMovieResponse} isLoading={isLoading}/>
    </>
  )
}

export default WatchedMovie;