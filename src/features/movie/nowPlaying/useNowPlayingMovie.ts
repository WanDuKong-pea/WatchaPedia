import { useQuery } from 'react-query';
import { nowPlayingApi } from '../../../apis/movieApi';
import {AxiosError, AxiosResponse} from "axios";
import {MovieDetail, ListResponse} from "../../../types";

//custom hook
//useNowPlayingMovie는 배열을 반환
const useNowPlayingMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('nowPlayingMovie', nowPlayingApi);
}

export default useNowPlayingMovie;