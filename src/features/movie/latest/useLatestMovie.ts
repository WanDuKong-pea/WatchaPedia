import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { latestApi } from '../../../apis/movieApi';
import { MovieDetail } from '../../../types';

//custom hook
//latest movie는 단일 항목이므로 배열이 아닌 단일 항목을 반환
const useLatestMovie = () => {
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>('latestMovie', latestApi);
}

export default useLatestMovie;