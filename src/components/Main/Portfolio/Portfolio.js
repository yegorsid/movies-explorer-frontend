function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__header'>Портфолио</h3>
      <a className='portfolio__item' href='https://github.com/Skavr666/how-to-learn' target="_blank" rel="noopener noreferrer">
        <h4 className='portfolio__item-name'>Статичный сайт</h4>
        <button className='portfolio__button'></button>
      </a>
      <a className='portfolio__item' href='https://skavr666.github.io/russian-travel/' target="_blank" rel="noopener noreferrer">
        <h4 className='portfolio__item-name'>Адаптивный сайт</h4>
        <button className='portfolio__button'></button>
      </a>
      <a className='portfolio__item' href='https://skavr666.github.io/react-mesto-auth/' target="_blank" rel="noopener noreferrer">
        <h4 className='portfolio__item-name'>Одностраничное приложение</h4>
        <button className='portfolio__button'></button>
      </a>
    </section>
  )
}

export default Portfolio;