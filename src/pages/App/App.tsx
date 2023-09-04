import React from 'react';
import style from './App.module.scss';
import Section from '../../components/section';
import Header from '../../components/header';
import Footer from '../../components/footer';
import About from '../../components/about';
import paintIcon from '../../assets/img/palette-solid.svg';
import tattooIcon from '../../assets/img/syringe-solid.svg';
import otherIcon  from '../../assets/img/book-open-solid.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <p>EU TRABALHO COM...</p>
      <Section icon={paintIcon} description="Acrilica Sob Tela" route="./acrilica" />
      <Section icon={tattooIcon} description="Tatuagem" route="./tatuagem"/>
      <Section icon={otherIcon} description="Outras expressões artisticas" route="./outras"/>
      <Footer />
    </div>
  );
}

export default App;
