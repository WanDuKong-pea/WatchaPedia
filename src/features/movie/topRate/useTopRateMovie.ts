import { useQuery } from 'react-query';
import { topRatedApi } from '../../../apis/movieApi';
import {AxiosError, AxiosResponse} from "axios";
import {MovieDetail, ListResponse} from "../../../types";

//custom hook
//usePopularMovie는 배열을 반환
const useTopRateMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('topRateMovie', topRatedApi);
}

export default useTopRateMovie;