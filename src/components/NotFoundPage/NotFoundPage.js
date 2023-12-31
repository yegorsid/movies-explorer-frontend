import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <h2 className="not-found-page__header">404</h2>
      <p className="not-found-page__text">Страница не найдена</p>
      <Link className="not-found-page__link" to={-1}>Назад</Link>
    </main>
  )
}

export default NotFoundPage;