import { useQuery } from 'react-query';
import {searchApi} from "../../apis/movieApi"
import { AxiosError, AxiosResponse } from 'axios';
import { ListResponse, Movie } from '../../types';

/**
 * useMovieSearch hook
 * useMovieSearch는 검색어를 string 타입으로 받아서,
 * 검색어가 변경될 때마다 API를 호출.
 * @param query 
 * @returns 
 */
const useMovieSearch = (query: string) => { 
    // useQuery는 쿼리 key로 'searchMovie' 를 사용하는 string 타입의 query를 받아서,
    // searchApi를 호출하는 함수를 두번째 인자로 받음.
    // 세번째 인자로는 옵션을 받음. 옵션으로는 enabled가 있음.
        // enabled는 query가 존재할 때만 API를 호출하도록 하는 옵션.
    // useQuery는 쿼리 결과를 AxiosResponse 타입으로 반환.
    // 반환되는 AxiosResponse 타입은 ListResponse<Movie> 타입을 data로 가지고 있음.
    return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(['searcheMovie', query], () => searchApi(query), { enabled: Boolean(query)});
}

export default useMovieSearch;