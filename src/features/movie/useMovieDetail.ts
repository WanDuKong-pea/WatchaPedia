import { useQuery } from 'react-query';
import { detailApi } from "../../apis/movieApi";
import { AxiosError, AxiosResponse } from 'axios';
import { MovieDetail } from '../../types';

const useMovieDetail = (query:string) => {
    //queryFn 함수는 searchApi를 실행
    //useQuery에 searchApi를 전달하지 않고 queryFn을 전달하는 이유는
    //useQuery가 쿼리 키가 변경될 때마다 쿼리 함수를 실행하기 때문
    //쿼리 키가 변경될 때마다 searchApi를 실행하면 API를 너무 많이 호출하게 됨
    //따라서 쿼리 키가 변경될 때마다 실행되는 함수를 따로 만들어서 전달
    const queryFn = () => detailApi(query);

    //useQuery는 쿼리 키와 쿼리 함수를 인자로 받음
    //enabled는 쿼리 키가 존재할 때만 쿼리 함수를 실행하도록 설정
    return useQuery<AxiosResponse<MovieDetail>,AxiosError>(['movieDetail',query],queryFn,{enabled:Boolean(query)});
}

export default useMovieDetail;