// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import ListPage from "./pages/ListPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle /> {/* 전체 스타일 초기화 적용 */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:type" element={<ListPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/item/:itemId" element={<DetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
