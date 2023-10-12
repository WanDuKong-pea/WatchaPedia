import axiosInstance from "./index";

//최근 상영작
export const latestApi = () => axiosInstance.get("/movie/latest");
//현재 상영작
export const nowPlayingApi = () => axiosInstance.get("/movie/now_playing");
//인기 상영작
export const popularApi = () => axiosInstance.get("/movie/popular");
//top rated 상영작
export const topRatedApi = () => axiosInstance.get("/movie/top_rated");
//개봉 예정작
export const upcomingApi = () => axiosInstance.get("/movie/upcoming");
//영화 상세정보
export const detailApi = (movieId: string) => axiosInstance.get(`/movie/${movieId}`);
//추천 영화(비슷한)
export const similarApi = (movieId: string) => axiosInstance.get(`/movie/${movieId}/similar`);
//영화 검색
export const searchApi = (query: string) => axiosInstance.get(`/search/movie?query=${ query }`);