import { useQuery } from 'react-query';
import { similarApi } from '../../apis/tvApi';
import { AxiosError, AxiosResponse } from 'axios';
import { ListResponse, TVDetail } from '../../types';

const useSimilarTv = (id: string) => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>,AxiosError>(['similarTv', id], () => similarApi(id)); 
}

export default useSimilarTv;

