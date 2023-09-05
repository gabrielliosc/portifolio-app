import React from 'react';
import style from './App.module.scss';
import Section from '../../components/section';
import Header from '../../components/header';
import Footer from '../../components/footer';
import About from '../../components/about';
import paintIcon from '../../assets/img/palette-solid.svg';
import tattooIcon from '../../assets/img/syringe-solid.svg';
import otherIcon from '../../assets/img/book-open-solid.svg';

const sections = [{
  icon: paintIcon,
  description: 'Acrilica Sob Tela',
  route: './acrilica'
},
{
  icon: tattooIcon,
  description: 'Tatuagem',
  route: './tatuagem'
},
{
  icon: otherIcon,
  description: 'Outras expressões artisticas',
  route: './outras'
}]
function App() {
  return (
    <div className={style.App}>
      <Header />
      <About />
      <div className={style.work}>
        <h1>EU TRABALHO COM...</h1>
        <div className={style.sections}>
          {sections.map((section, index) => (
            <Section key={index} icon={section.icon} description={section.description} route={section.route} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
