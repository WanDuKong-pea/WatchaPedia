import axios from "axios";

//프로젝트에서 공통으로 사용할 axios 인스턴스를 생성
//baseURL 주소 뒤 /숫자는 버전 정보
const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/3`,
    params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: "ko-KR",
    }
});

export default axiosInstance;