import style from './section.module.scss';

interface infoGalleryItem{
    picture: string,
    description: string,
    price: string,
    alt: string
}

export default function GalleryItem({picture,description,price,alt}: infoGalleryItem) {
    return (
        <section className={style.sectionItem}>            
            <img src={picture} alt={alt} />
            <p>{description}</p>
            <p>{price}</p>
        </section> 
    )
}