// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import ListPage from "./pages/ListPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle /> {/* 전체 스타일 초기화 적용 */}
      {/* 나중에 이곳에 <Header />가 들어갈 예정입니다 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:type" element={<ListPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/item/:itemId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
