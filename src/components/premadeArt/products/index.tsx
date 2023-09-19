import style from './products.module.scss';
import buyIcon from '../../../assets/img/svg/cart-shopping-solid.svg';

interface productItem{
    image: string,
    description: string,
    price: number,
    name: string
}

export default function ProductsItem({image,description,price,name}: productItem) {
    return (
        <section className={style.paintItem}>            
            <img className={style.paintImg} src={image} />
            <p>{description}</p>
            <p>{price} <a href='wpp'><img src={buyIcon} alt="Compre o produto" /></a></p>
        </section> 
    )
}