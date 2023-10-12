import { useQuery } from 'react-query';
import { popularApi } from '../../../apis/movieApi';
import {AxiosError, AxiosResponse} from "axios";
import {MovieDetail, ListResponse} from "../../../types";

//custom hook
//usePopularMovie는 배열을 반환
const usePopularMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('popularMovie', popularApi);
}

export default usePopularMovie;