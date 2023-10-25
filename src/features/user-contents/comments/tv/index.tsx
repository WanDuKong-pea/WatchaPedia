import React from 'react';
import styled from '@emotion/styled';
import TVGridContainer from '../../../../components/TVGridContainer';
import useCommentsTV from './useCommentsTV';


const Base = styled.div`
    margin-bottom: 62px;
`;

const Title = styled.h4`
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    padding: 12px 0 14px;
`;

const CommentsTV: React.FC = () => {
    const { data: commentsTVResponse, isLoading } = useCommentsTV();

    return (
      <>
          <TVGridContainer response={commentsTVResponse} isLoading={isLoading}/>
      </>
    )
}

export default CommentsTV;
