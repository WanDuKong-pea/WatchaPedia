import React from 'react';
import styled from '@emotion/styled';
import Card from './Card';

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

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
}

interface Props {
    response ?:{
        data :{
            results: Movie[];
        };
    };
    isLoading: boolean;
}

const MovieGridContainer: React.FC<Props> = ({response,isLoading}) => {
    const getYear = (release_date: string) => release_date.split('-')[0] || '';
    return (
        <>
        <BaseContainer>
          {
            isLoading || !response ? (
              <div>Loading...</div>
            ) : (
                response?.data.results.map((item) => (
                    <ConteinerItem key={item.id}>
                    <Card
                      key={item.id}
                      linkUrl={`/movie/${item.id}`}
                      title={item.title}
                      posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${item.poster_path}`}
                      voteAverage={item.vote_average}
                      year={getYear(item.release_date)}
                    />
                    </ConteinerItem>
                  ))
            )
          }
        </BaseContainer>
        </>
    )
}

export default MovieGridContainer;