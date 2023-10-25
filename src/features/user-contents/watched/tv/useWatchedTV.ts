import {useQuery} from 'react-query';
import { ListResponse, TVDetail } from '../../../../types';
import { AxiosResponse, AxiosError } from 'axios';
import { popularApi } from '../../../../apis/tvApi';

const useWatchedTV = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('popularTv', popularApi);
}

export default useWatchedTV;