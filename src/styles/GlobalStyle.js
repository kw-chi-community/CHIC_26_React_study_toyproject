// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 1. 기본 여백 및 박스 사이징 초기화 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 2. 폰트 및 배경 설정 */
  body {
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  /* 3. 링크(a) 태그 초기화 */
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  /* 4. 리스트(ul, li) 초기화 */
  ul, ol, li {
    list-style: none;
  }

  /* 5. 버튼 초기화 */
  button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
  }

  /* 6. 이미지 초기화 */
  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
