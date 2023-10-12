import { useQuery } from 'react-query';
import { upcomingApi } from '../../../apis/movieApi';
import {AxiosError, AxiosResponse} from "axios";
import {MovieDetail, ListResponse} from "../../../types";

//custom hook
//useUpcomingMovie는 배열을 반환
const useUpcomingMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('upcomingMovie', upcomingApi);
}

export default useUpcomingMovie;