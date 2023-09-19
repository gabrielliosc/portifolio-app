import Section from '../section';
import style from './premadeArt.module.scss';
import paint1 from '../../assets/img/png/artist-profile.png';
import paint2 from '../../assets/img/png/artist-profile.png';
import paint3 from '../../assets/img/png/artist-profile.png';
import ProductsItem from './products';

export default function PremadeArt() {

    const paints = [{
        image: paint1,
        description: 'Paint - 1',
        price: 200.00,
        name: 'Paint - 1'
    },
    {
        image: paint2,
        description: 'Paint - 2',
        price: 100.00,
        name: 'Paint - 2'

    },
    {
        image: paint3,
        description: 'Paint - 3',
        price: 300.00,
        name: 'Paint - 3'

    }]

    const tatoos = [{
        image: paint1,
        description: 'Tatuagem - 1',
        price: 200.00,
        name: 'Paint - 1'
    },
    {
        image: paint2,
        description: 'Tatuagem - 2',
        price: 100.00,
        name: 'Paint - 2'

    },
    {
        image: paint3,
        description: 'Tatuagem - 3',
        price: 300.00,
        name: 'Paint - 3'

    }]


    return (
        <div className={style.premadeArtItems}>
            <h2 className={style.wave}>Pintura Acrílica</h2>
            <div className={style.paints}>
                {paints.map((paint, index) => (
                    <ProductsItem key={index} image={paint.image} description={paint.description} price={paint.price} name={paint.name} />
                ))}
            </div>
            <h2 className={style.wave}>Tatuagem</h2>
            <div className={style.tatoos}>
                {tatoos.map((tatoo, index) => (
                    <ProductsItem key={index} image={tatoo.image} description={tatoo.description} price={tatoo.price} name={tatoo.name} />
                ))}
            </div>
        </div>
    )
}