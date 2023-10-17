import style from './acrylic.module.scss';
import GalleryItem from "../gallery";

import gansoPic from '../../assets/img/png/ganso.png';
import rosasPic from '../../assets/img/png/rosas.png';
import semTituloPic from '../../assets/img/png/sem-titulo.png';

export default function GalleryAcrylic() {

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

    return (
        <div className={style.acrylic}>
            <h2>Pintura</h2>
            <div className={style.item}>
                {paints.map((paint, index) => (
                    <GalleryItem key={index} picture={paint.picture} description={paint.description} alt={paint.alt} />
                ))}
            </div>
        </div>
    )
}