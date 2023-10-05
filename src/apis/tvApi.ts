import axiosInstance from "./index";

//최신작 
export const latestApi = () => axiosInstance.get("/tv/latest");
//오늘 상영 프로그램 
export const airingTodayApi = () => axiosInstance.get("/tv/airing_today");
//현재 상영 프로그램 
export const onTheAirApi = () => axiosInstance.get("/tv/on_the_air");
//인기 프로그램  
export const popularApi = () => axiosInstance.get("/tv/popular");
//top rated 프로그램 
export const topRatedApi = () => axiosInstance.get("/tv/top_rated");
//tv 프로그램 상세정보 {tv_id}**
export const detailApi = (tvId: string) => axiosInstance.get(`/tv/${tvId}`);
//유사 프로그램 
export const similarApi = (tvId: string) => axiosInstance.get(`/tv/${tvId}/similar`);
//tv 프로그램 검색
export const searchApi = (query: string) => axiosInstance.get(`/search/tv?query=${ query }`);