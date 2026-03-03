// src/components/home/BookCard.jsx


export default function BookCard({ title, author, image }) {
  return (
    // 2. className을 일반 CSS 클래스 이름으로 바꿉니다.
    <div className="book-card">
      <div className="book-image-wrapper">
        <img 
          src={image || "https://via.placeholder.com/150x200"} 
          alt={title}
        />
        <div className="plus-button">+</div>
      </div>
      
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
      </div>
    </div>
  );
}