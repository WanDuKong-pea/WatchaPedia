import {useQuery} from 'react-query';
import { topRatedApi } from '../../../apis/tvApi';
import { TVDetail, ListResponse } from '../../../types';
import { AxiosResponse, AxiosError } from 'axios';

const useTopRateTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('topRateTv', topRatedApi);
}

export default useTopRateTv;
