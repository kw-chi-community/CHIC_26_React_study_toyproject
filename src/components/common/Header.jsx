import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import aladinLogo from "../../assets/aladinLogo.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      {/* 1단: 최상단 네비게이션 */}
      <TopSection>
        <InnerContainer>
          <LeftNav>
            <Link to="#" className="active">
              HOME
            </Link>
            <Link to="#">국내도서</Link>
            <Link to="#">전자책</Link>
            <Link to="#">만권당</Link>
            <Link to="#">외국도서</Link>
            <Link to="#">알라딘굿즈</Link>
            <Link to="#">온라인중고</Link>
            <Link to="#">중고매장</Link>
            <Link to="#">우주점</Link>
            <Link to="#">음반</Link>
            <Link to="#">블루레이</Link>
            <Link to="#">커피</Link>
          </LeftNav>
          <RightUtil>
            <Link to="#">로그인</Link>
            <Link to="#">회원가입</Link>
            <Link to="#">마이페이지</Link>
            <Link to="#">고객센터</Link>
            <Link to="#">장바구니</Link>
          </RightUtil>
        </InnerContainer>
      </TopSection>

      {/* 2단: 로고 및 검색바 */}
      <MainSection>
        <InnerContainer>
          <Logo to="/">
            <img src={aladinLogo} alt="알라딘" />
          </Logo>
          <SearchBox>
            <CategorySelect>통합검색</CategorySelect>
            <SearchInput placeholder="사랑을 담아, 제인 오스틴" />
            <SearchBtn>
              <FiSearch size={22} />
            </SearchBtn>
          </SearchBox>
        </InnerContainer>
      </MainSection>

      {/* 3단: 네비게이션 */}
      <NavSection>
        <InnerContainer>
          <MenuList>
            <li>
              <Link to="#">분야보기</Link>
            </li>
            <li>
              <Link to="#" className="highlight">
                내일의 젊은 시인
              </Link>
            </li>
            <li>
              <Link to="#">추천마법사</Link>
            </li>
            <li>
              <Link to="#">베스트</Link>
            </li>
            <li>
              <Link to="#">새로나온책</Link>
            </li>
            <li>
              <Link to="#">이벤트</Link>
            </li>
            <li>
              <Link to="#">정가인하도서</Link>
            </li>
            <li>
              <Link to="#">추천도서</Link>
            </li>
            <li>
              <Link to="#">작가와의 만남</Link>
            </li>
            <li>
              <Link to="#">북펀드</Link>
            </li>
            <li>
              <Link to="#" className="highlight">
                북플 서재
              </Link>
            </li>
            <li>
              <Link to="#" className="highlight">
                창작플랫폼
              </Link>
            </li>
          </MenuList>
        </InnerContainer>
      </NavSection>
    </HeaderContainer>
  );
};

export default Header;

// --- Styled Components ---
const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

const TopSection = styled.div`
  background-color: #f8f8f8;
  border-bottom: 1px solid #eee;
  font-size: 12px;
  height: 35px;
  display: flex;
  align-items: center;
`;

/* 좌측 네비게이션 스타일 추가 */
const LeftNav = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #666;
    text-decoration: none;
    &.active {
      font-weight: bold;
      color: #333;
    }
  }
`;

/* 우측 유틸 메뉴 스타일 추가 */
const RightUtil = styled.div`
  margin-left: auto;
  display: flex;
  gap: 15px;

  a {
    color: #666;
    text-decoration: none;
  }
`;

const MainSection = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #eee;
`;

const Logo = styled(Link)`
  img {
    height: 60px;
    width: auto;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  flex: 1;
  max-width: 500px;
  border: 2px solid #1b3a82;
  border-radius: 25px;
  overflow: hidden; /* 내부 요소가 곡선을 벗어나지 않게 설정 */
`;

/* 카테고리 선택(통합검색) 스타일 추가 */
const CategorySelect = styled.div`
  padding: 0 15px;
  font-size: 14px;
  color: #333;
  border-right: 1px solid #eee;
  white-space: nowrap;
`;

/* 검색창 입력 필드 스타일 추가 */
const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 10px 15px;
  outline: none;
  font-size: 14px;
`;

/* 검색 버튼 스타일 추가 */
const SearchBtn = styled.button`
  background-color: #1b3a82;
  color: white;
  border: none;
  padding: 0 20px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavSection = styled.nav`
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const MenuList = styled.ul`
  display: flex;
  gap: 20px;
  padding: 12px 0;
  list-style: none; /* 점 없애기 */

  li a {
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
    color: #333;

    &:hover {
      color: #1b3a82;
    }

    &.highlight {
      color: #ff4b4b;
    }
  }
`;
