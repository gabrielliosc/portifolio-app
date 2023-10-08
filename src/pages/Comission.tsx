import style from './commissions/commissions.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import Form from '../components/form';


export default function Commission() {
  return (
    <div className={style.commission}>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}
