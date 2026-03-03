// src/components/common/Footer.jsx
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <span>회사소개</span>
          <span>채용안내</span>
          <span>이용약관</span>
          <span classname="bold">개인정보처리방침</span>
          <span>청소년 보호정책</span>
          <span>중고매장</span>
          <span>제휴·마케팅 안내</span>
          <span>판매자 매니저</span>
          <span>출판사·공급사 안내</span>
          <span>광고 안내</span>
          <span>학교·기업·기관 대량구매</span>
        </FooterLinks>
        <CompanyInfo>
          (주)알라딘커뮤니케이션
          <br />
          대표이사 최우경 사업자등록 201-81-23094 통신판매업신고
          2003-서울중구-01520 이메일 privacy@aladin.co.kr 호스팅 제공자
          알라딘커뮤니케이션 (본사) 서울시 중구 서소문로 89-31 <br />ⓒ Aladin
          Communication. All Rights Reserved.
        </CompanyInfo>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 0;
  background-color: #f8f8f8;
  border-top: 1px solid #eee;
  margin-top: 50px; // 컨텐츠와 너무 붙지 않게 여백
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterLinks = styled.div`
  margin-bottom: 20px;
  span {
    margin-right: 20px;
    font-size: 13px;
    color: #555;
    cursor: pointer;

    &.bold {
      font-weight: bold;
    }
  }
`;

const CompanyInfo = styled.p`
  font-size: 12px;
  color: #888;
  line-height: 1.8;
`;
