import style from './gallerySection.module.scss';
import GalleryItem from "./galleryItem";


interface Item {
    picture: string,
    description: string,
    alt: string
}

interface Gallery {
    itens: Array<Item>,
    title: string
}

export default function GallerySection({itens,title}: Gallery) {

    return (
        <div className={style.section}>
            <h2>{title}</h2>
            <div className={style.item}>
                {itens.map((item, index) => (
                    <GalleryItem key={index} picture={item.picture} description={item.description} alt={item.alt} />
                ))}
            </div>
        </div>
    )
}