import style from './home/home.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import About from '../components/about';
import Work from '../components/work';


export default function Home() {
  return (
    <div className={style.Home}>
      <Header />
      <About />
      <Work />
      <Footer />
    </div>
  );
}
