import {useQuery} from 'react-query';
import { popularApi } from '../../../apis/tvApi';
import { TVDetail, ListResponse } from '../../../types';
import { AxiosResponse, AxiosError } from 'axios';

const usePopularTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('popularTv', popularApi);
}

export default usePopularTv;
