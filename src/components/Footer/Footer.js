function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</p>
      <div className="footer__content">
        <p className="footer__year">© {currentYear}</p>
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/profile/web/">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;