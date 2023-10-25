import {useQuery} from 'react-query';
import { ListResponse, MovieDetail } from '../../../../types';
import { AxiosResponse, AxiosError } from 'axios';
import { popularApi } from '../../../../apis/movieApi';

const useCommentsMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('popularMovie', popularApi);
}

export default useCommentsMovie;
