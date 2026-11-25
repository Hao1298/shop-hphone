export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="/" className="logo footer-logo">
            H<span>Phone</span>
          </a>
          <p>
            Hệ thống bán lẻ điện thoại chính hãng phục vụ bài tập môn Công nghệ
            lập trình hiện đại.
          </p>
        </div>

        <div className="footer-contact">
          <p>
            <strong>Hotline:</strong> 1900 0000
          </p>
          <p>
            <strong>Email:</strong> hotro@hphone.vn
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {year} HPhone · All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}