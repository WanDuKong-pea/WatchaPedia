import React from 'react';
import styled from '@emotion/styled';
import TVGridContainer from '../../../../components/TVGridContainer';
import useLikeTV from './useLikeTV';


const Base = styled.div`
    margin-bottom: 62px;
`;

const Title = styled.h4`
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    padding: 12px 0 14px;
`;

const LikeTV: React.FC = () => {
    const { data: likeTVResponse, isLoading } = useLikeTV();

    return (
      <>
          <TVGridContainer response={likeTVResponse} isLoading={isLoading}/>
      </>
    )
}

export default LikeTV;
