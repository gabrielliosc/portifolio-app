import style from './home/home.module.scss';

import Header from '../components/header';
import About from '../components/about';
import Work from '../components/work';
import Footer from '../components/footer';
import GalleryTattoo from '../components/galleryTattoo';


export default function Home() {
  return (
    <div className={style.Home}>
      <Header />
      <About />
      <Work />
      <GalleryTattoo />
      <Footer />
    </div>
  );
}
