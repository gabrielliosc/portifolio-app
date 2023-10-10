import GalleryItem from "../gallery"
import style from './gallerytattoo.module.scss';
import raminhoPic from '../../assets/img/png/raminho.png';
import macacoPic from '../../assets/img/png/macaco-louco.png';
import aboboraPic from '../../assets/img/png/abobora.png';

export default function GalleryTattoo() {

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
        <div className={style.work}>
            <h2>Tatuagem</h2>
            <div className={style.sections}>
                {tattoos.map((tattoo, index) => (
                    <GalleryItem key={index} picture={tattoo.picture} description={tattoo.description} alt={tattoo.alt} />
                ))}
            </div>
        </div>
    )
}