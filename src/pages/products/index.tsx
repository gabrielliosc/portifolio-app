import React from 'react';
import style from './products.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PremadeArt from '../../components/premadeArt';


export default function Products() {
  return (
    <div className={style.Acrylic}>
      <Header />
      <PremadeArt />
      <Footer />
    </div>
  );
}

