import React from 'react';
import styled from '@emotion/styled';
import TVGridContainer from '../../../components/TVGridContainer';
import useAllUserTV from './useAllUserTV';


const Base = styled.div`
    margin-bottom: 62px;
`;

const Title = styled.h4`
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    padding: 12px 0 14px;
`;

const AllUserTVList: React.FC = () => {
    const { data: TVResponse, isLoading } = useAllUserTV();

    return (
      <>
          <TVGridContainer response={TVResponse} isLoading={isLoading}/>
      </>
    )
}

export default AllUserTVList;
