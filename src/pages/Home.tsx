import style from './home/home.module.scss';

import gansoPic from '../assets/img/png/ganso.png'
import rosasPic from '../assets/img/png/rosas.png';
import semTituloPic from '../assets/img/png/sem-titulo.png';
import raminhoPic from '../assets/img/png/raminho.png';
import macacoPic from '../assets/img/png/macaco-louco.png';
import aboboraPic from '../assets/img/png/abobora.png';

import Header from '../components/header';
import About from '../components/about';
import Work from '../components/work';
import Footer from '../components/footer';
import GallerySection from '../components/gallerySection';

export default function Home() {

  const paints = [{
    picture: gansoPic,
    description: 'Ganso',
    alt: 'Ganso'
  },
  {
    picture: rosasPic,
    description: 'Rosas',
    alt: 'Rosas'
  },
  {
    picture: semTituloPic,
    description: 'Sem título',
    alt: 'Sem título'
  }]

  const tattoos = [{
    picture: raminhoPic,
    description: 'Raminho',
    alt: 'Raminho'
},
{
    picture: macacoPic,
    description: 'Macaco Louco',
    alt: 'Macaco Louco'
},
{
    picture: aboboraPic,
    description: 'Abobora',
    alt: 'Abobora'
}]

  return (
    <div className={style.Home}>
      <Header />
      <About />
      <Work />
      <GallerySection itens={tattoos} title='Tatuagem' />
      <GallerySection itens={paints} title='Pintura' />
      <Footer />
    </div>
  );
}
