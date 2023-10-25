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
    name: string;
    poster_path: string;
    vote_average: number;
    first_air_date: string;
}

interface Props {
    response ?:{
        data :{
            results: Movie[];
        };
    };
    isLoading: boolean;
}

const TVGridContainer: React.FC<Props> = ({response,isLoading}) => {
    const getYear = (first_air_date: string) => first_air_date.split('-')[0] || '';
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
                      linkUrl={`/tv/${item.id}`}
                      title={item.name}
                      posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${item.poster_path}`}
                      voteAverage={item.vote_average}
                      year={getYear(item.first_air_date)}
                    />
                    </ConteinerItem>
                  ))
            )
          }
        </BaseContainer>
        </>
    )
}

export default TVGridContainer;