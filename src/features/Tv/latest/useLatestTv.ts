import {useQuery} from 'react-query';
import { latestApi } from '../../../apis/tvApi';
import { TVDetail } from '../../../types';
import { AxiosResponse, AxiosError } from 'axios';

const useLatestTv = () => {
    return useQuery<AxiosResponse<TVDetail>, AxiosError>('latestTv', latestApi);
}

export default useLatestTv;