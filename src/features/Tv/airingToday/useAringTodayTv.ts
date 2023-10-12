import {useQuery} from 'react-query';
import { airingTodayApi } from '../../../apis/tvApi';
import { TVDetail, ListResponse } from '../../../types';
import { AxiosResponse, AxiosError } from 'axios';

const useAiringTodayTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('airingTodayTv', airingTodayApi);
}

export default useAiringTodayTv;
