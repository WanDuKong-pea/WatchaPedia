import {useQuery} from 'react-query';
import { onTheAirApi } from '../../../apis/tvApi';
import { TVDetail, ListResponse } from '../../../types';
import { AxiosResponse, AxiosError } from 'axios';

const useOntheAirTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('onTheAirTv', onTheAirApi);
}

export default useOntheAirTv;
