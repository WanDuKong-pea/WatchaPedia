import React, { useState } from "react";
import styled from "@emotion/styled";
import {AiOutlineSearch} from 'react-icons/ai'
import useMovieSearch from '../features/movie/useMovieSearch';

//z-index => 레이어의 순서를 정해주는 속성. 높을수록 위에 쌓임
const Base = styled.header`
    background: rgb(255, 255, 255);
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    box-shadow: rgb(0 0 0 / 0%) 0px 1px 0px 0px;
    width: 100%;
    height: 62px;
    z-index: 10; 
`;

const Navigation = styled.nav`
    margin: 0 auto;
    max-width: 1200px;
`;

const MenuListWrapper = styled.div``;

//overflow: hidden = 자식요소가 부모요소의 영역을 벗어나는 경우, 
    //부모요소의 영역을 벗어난 자식요소를 숨김
    //검색 목록을 영역 밖에 띄우는 것에 있어서 오류 발생하여 삭제함
const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
`;

//flex-shrink CSS 속성은 Flexbox 레이아웃에서 사용되며, 
//요소의 크기를 줄일 때 어떻게 크기를 줄일지를 지정하는 데 사용
//flex-shrink: 0; => 요소의 크기를 줄이지 않음
const Menu = styled.li`
    display: flex;
    align-items: center;
    height: 62px;
    flex-shrink: 0;
    &:first-child{
        margin-left: 10px;
    }
    &:not(:first-child){
        margin-left: 24px;
    }
    &:last-child{
        margin-right: 10px;
    }
`;

//styled.button<{active?: boolean}> => button 컴포넌트에 active라는 props를 받아옴
//TypeScript에서는 props를 받아올 때, props의 타입을 명시해줘야 함
//TypeScript와 함께 사용되는 Emotion CSS-in-JS에서 사용하는 타입 지정 방법
const MenuButton = styled.button<{active?: boolean}>`
    font-size: 15px;
    color: ${({active}) => (active ? 'rgb(53,53,53)' : 'rgb(126,126,126)')};
    cursor: pointer;
    border: none;
    background: none;
`;

//flex-shirnk: 1; => 요소의 크기를 줄임
//postion: relative; => 요소를 일반적인 문서 흐름에 따라 배치
//align-items: center; => 요소를 수직축에서 가운데로 정렬
const SearchMenu = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    height: 62px;
    flex-shrink: 1;
    margin: 0 0 0 auto;
    position: relative;
`;
//Link 컴포넌트 CSS 수정(기본 파란색 => 검은색)
const Link = styled.a` 
    text-decoration: none;
    color: black;
`;

const TextLogo = styled.h1`
    font-size: 24px;
    font-weight: 700;
    > span[class="primary"]{
        color: rgb(255, 47, 110);
    }
    > span:not(.primary){
        color: #222;
    }
`;

//position: relative; => 요소를 일반적인 문서 흐름에 따라 배치
const SearchContiner = styled.div`
    position: relative;
    width: 100%;
`;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.form``;

//box-sizing: border-box; 
// => 요소의 너비와 높이가 요소의 패딩과 테두리를 포함한 값으로 계산
const SearchLabel = styled.label`
    background: rgb(245,245,247);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    border-radius: 2px;
    padding: 7px 8px;
`;

//overflow: hidden; => 자식요소가 부모요소의 영역을 벗어나는 경우,
    //부모요소의 영역을 벗어난 자식요소를 숨김
//text-overflow: ellipsis; => 텍스트가 너무 길어서 요소의 영역을 벗어날 때,
    //텍스트를 생략하는 방법
//caret-color: rgb(53, 53, 53); => 커서의 색상을 지정
//line-height: 23px; => 줄 높이를 지정
    //여기서 줄은 텍스트의 높이를 말함
const SearchInput = styled.input`
    font-size: 14px;
    font-weight: 400;
    background: transparent;
    width: 100%;
    padding: 0 0 0 8px;
    border: 0;
    overflow: hidden;
    text=overflow: ellipsis;
    caret-color: rgb(53, 53, 53);
    line-height: 23px;
`;

const SignIn = styled.button`
    background: transparent;
    color: rgb(116,116,123);
    font-size: 14px;
    padding: 0;
    border: 0;
    cursor: pointer;
    margin: 15px 0;
`;

const SignUp = styled.button`
    border-redius: 6px;
    font-weight: 500;
    box-sizing: border-box;
    min-width: 72px;
    height: 32px;
    background: transparent;
    color: rgb(53,53,53);
    font-size: 14px;
    border: 1px solid rgba(116,116,123,0.5);
    cursor: pointer;
    margin: 15px 0;
`;

const SearchResultWrapper = styled.div` 
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 999;
    background: #fff;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1);
    max-height: 480px;
    overflow-y: scroll;
`;

const SearchResultList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const SearchResultListItem = styled.li`
    padding: 4px 6px;
    box-sizing: border-box;
    font-size: 16px;
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover{
        background: #eee;
    }    
`;

const Header: React.FC = () => {
    //검색 키워드를 저장하는 state
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    
    //검색키워드를 set하는 함수
    const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchKeyword(e.target.value);
    }

    //검색키워드가 변경될때마다 다시 렌더링되어 검색결과를 가져옴
    const { data: searchResult } = useMovieSearch(searchKeyword);

    return (
        <Base>
            <Navigation>
                <MenuListWrapper>
                    <MenuList>
                        <Menu>
                            <Link href="/">
                                <TextLogo>
                                    <span className="primary">WATCHOUT</span>
                                    <span>PEDIA</span>
                                </TextLogo>
                            </Link>
                        </Menu>
                        <Menu>
                            <Link href="/">
                                <MenuButton>영화</MenuButton>
                            </Link>
                        </Menu>
                        <Menu>
                            <Link href="/tv">
                                <MenuButton>TV 프로그램</MenuButton>
                            </Link>
                        </Menu>
                        <SearchMenu>
                            <SearchContiner>
                                <SearchFormWrapper>
                                    <SearchForm>
                                        <SearchLabel>
                                            <AiOutlineSearch size={20} />
                                            <SearchInput placeholder="컨텐츠, 인물, 컬렉션, 유저를 검색해보세요." onChange={handleKeyword} />
                                        </SearchLabel>
                                    </SearchForm>
                                </SearchFormWrapper>
                            </SearchContiner>
                            <SearchResultWrapper>
                                <SearchResultList>
                                    {
                                        searchResult?.data.results.map(item => (
                                            <Link key={item.id} href={`/movie/${item.id}`}>
                                                <SearchResultListItem>{item.title}</SearchResultListItem>
                                            </Link>
                                        ))
                                    }
                                </SearchResultList>    
                            </SearchResultWrapper>
                        </SearchMenu>
                        <Menu>
                            <Link href="/signin">
                                <SignIn>로그인</SignIn>
                            </Link>
                        </Menu>
                        <Menu>
                            <Link href="/signup">   
                                <SignUp>회원가입</SignUp>
                            </Link>
                        </Menu>
                    </MenuList>
                </MenuListWrapper>
            </Navigation>
        </Base>
    )
}

export default Header;