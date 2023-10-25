import React from 'react';
import styled from '@emotion/styled';
import useAllUserMovie from './useAllUserMovie';
import MovieGridContainer from '../../../components/MovieGridContainer';

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



const AllUserMovieList: React.FC = () => {
  const { data: movieResponse, isLoading } = useAllUserMovie();

  return (
    <>
        <MovieGridContainer response={movieResponse} isLoading={isLoading}/>
    </>
  )
}

export default AllUserMovieList;