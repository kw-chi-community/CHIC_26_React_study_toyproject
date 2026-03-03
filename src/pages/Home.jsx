
import "../App.css";
import BookCard from "../components/home/BookCard";
import { useEffect, useState } from "react";
import ad from "../assets/ad.png";
import r_ad from "../assets/right_ad.png"

export default function Home() {
  const [books, setBooks] = useState([]);      // 1. 신간 소개
  const [samilBooks, setSamilBooks] = useState([]); // 2. 삼일절 관련
  const [magicBooks, setMagicBooks] = useState([]); // 3. 추천마법사 (추가!)
  const [carouselData, setCarouselData] = useState([]); // 9개 배너의 데이터 (각 4권씩)
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const TTB_KEY = import.meta.env.VITE_ALADIN_TTB_KEY;

  const categories = ["편집장 추천", "베스트셀러", "신간", "이주의 책", "이벤트", "인기 도서", "화제의 책", "새나온 책", "독자의 선택"];

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // --- (1) 신간 리스트 호출 ---
        const resNew = await fetch(
          `/api/ItemList.aspx?ttbkey=${TTB_KEY}&QueryType=ItemNewAll&MaxResults=5&start=1&SearchTarget=Book&output=js&Version=20131101`
        );
        const dataNew = await resNew.json();
        if (dataNew.item) setBooks(dataNew.item);

        // --- (2) 삼일절 관련 도서 호출 (랜덤 페이지) ---
        const randomSamilStart = Math.floor(Math.random() * 5) + 1; 
        const resSamil = await fetch(
          `/api/ItemSearch.aspx?ttbkey=${TTB_KEY}&Query=3.1운동&QueryType=Keyword&MaxResults=5&start=${randomSamilStart}&SearchTarget=Book&output=js&Version=20131101`
        );
        const dataSamil = await resSamil.json();
        if (dataSamil.item) setSamilBooks(dataSamil.item);

        // --- (3) 추천마법사 도서 호출 (편집자 추천 / 랜덤 페이지) ---
        const randomMagicStart = Math.floor(Math.random() * 5) + 1;
        const resMagic = await fetch(
          `/api/ItemList.aspx?ttbkey=${TTB_KEY}&QueryType=ItemNewAll&MaxResults=5&start=${randomMagicStart}&SearchTarget=Book&output=js&Version=20131101`
        );
        const dataMagic = await resMagic.json();

        if (dataMagic.item) {setMagicBooks(dataMagic.item);
        } else{
          setMagicBooks(books.slice(5,10))
        }

        const requests = categories.map((_, index) => {
          const randomStart = Math.floor(Math.random() * 5) + 1;
          return fetch(
            `/api/ItemList.aspx?ttbkey=${TTB_KEY}&QueryType=ItemNewAll&MaxResults=4&start=${randomStart}&SearchTarget=Book&output=js&Version=20131101`
          ).then(res => res.json());
        });

        const carouselResults = await Promise.all(requests);
        setCarouselData(carouselResults.map(res => res.item || []));

        setLoading(false);
      } catch (e) {
        console.error("데이터 로딩 중 에러 발생:", e);
        setLoading(false);
      }
    };
    
    if (TTB_KEY) fetchAllData();
  }, [TTB_KEY]);

  if (loading) return <div className="loading">로딩 중...</div>;

  return (
    <div className="home-container">
      {/* 1. 좌측 사이드바 */}
      <aside className="sidebar left-sidebar">
        <div className="ad-box">
          <img src={ad} alt="프로젝트 헤일메리" />
        </div>
      </aside>

      {/* 2. 중앙 메인 */}
      <main className="main-content">
        <section className="carousel-section">
          <div className="carousel-window">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {carouselData.map((books, idx) => (
                <div className="carousel-slide" key={idx}>
                  <div className="slide-grid">
                    {books.map((book) => (
                      <BookCard 
                        key={book.itemId}
                        title={book.title}
                        author={book.author}
                        image={book.cover}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 하단 탭 메뉴 (호버 시 작동) */}
          <div className="carousel-tabs">
            {categories.map((name, i) => (
              <button
                key={i}
                className={`tab-btn ${activeIndex === i ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(i)} // 마우스 올리면 해당 슬라이드로 이동
              >
                {name}
              </button>
            ))}
          </div>
        </section>
        {/* --- 캐러셀 영역 끝 --- */}
        

        {/* [첫 번째 섹션: 신간] */}
        <h2 className="section-title">
            신간 <span className="arrow"> &gt;</span>
          </h2>
        <div className="book-grid">
          {books.map((book) => (
            <BookCard 
              key={book.itemId}
              title={book.title}
              author={book.author}
              image={book.cover}
            />
          ))}
        </div>

        {/* [두 번째 섹션: 삼일절] */}
        <section className="samil-section">
          <h2 className="section-title">
            제 107주년 삼일절 <span className="arrow"> &gt;</span>
          </h2>
          <div className="samil-book-list" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            {samilBooks.map((book) => (
              <div key={book.itemId} style={{ width: '20%' }}>
                <img src={book.cover} alt={book.title} style={{ width: '100%', borderRadius: '8px' }} />
                <p style={{ fontSize: '12px', marginTop: '5px' }}>{book.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* [세 번째 섹션: 추천마법사] */}
        <section className="magic-section">
          <h2 className="section-title">
            추천마법사의 선택 <span className="arrow"> &gt;</span>
          </h2>
          <div className="book-grid">
            {/* 여기를 magicBooks로 바꿨습니다! */}
            {magicBooks.map((book) => (
              <BookCard 
                key={book.itemId}
                title={book.title}
                author={book.author}
                image={book.cover}
              />
            ))}
          </div>
        </section>
      </main>

      {/* 3. 우측 사이드바 */}
      <aside className="sidebar right-sidebar">
        <div className="ad-box">
          <img src={r_ad} alt="" style={{ width: '70%', height: 'auto', display: 'block', margin: '0 auto' }} />
        </div>
      </aside>

    </div>
  );
}