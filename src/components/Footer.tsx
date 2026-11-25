export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} HPhone · Bài tập môn Công nghệ lập trình hiện đại</p>
        <p>Hotline: 1900 0000 · Email: hotro@hphone.vn</p>
      </div>
    </footer>
  );
}