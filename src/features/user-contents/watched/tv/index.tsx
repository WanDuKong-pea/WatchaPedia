import React from 'react';
import styled from '@emotion/styled';
import TVGridContainer from '../../../../components/TVGridContainer';
import useWatchedTV from './useWatchedTV';


const Base = styled.div`
    margin-bottom: 62px;
`;

const Title = styled.h4`
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    padding: 12px 0 14px;
`;

const WatchedTV: React.FC = () => {
    const { data: watchedTVResponse, isLoading } = useWatchedTV();

    return (
      <>
          <TVGridContainer response={watchedTVResponse} isLoading={isLoading}/>
      </>
    )
}

export default WatchedTV;
