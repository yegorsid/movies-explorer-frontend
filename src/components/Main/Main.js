import Header from '../Header/Header.js';
import Promo from '../Main/Promo/Promo.js';
import AboutProject from '../Main/AboutProject/AboutProject.js';
import Techs from '../Main/Techs/Techs.js';
import AboutMe from '../Main/AboutMe/AboutMe.js';
import Portfolio from '../Main/Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';

function Main() {
  return (
    <div>
      <Header colorScheme={{ isWhite: false }}/>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default Main;