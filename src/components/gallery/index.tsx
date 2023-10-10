import style from './gallery.module.scss';

interface infoGalleryItem{
    picture: string,
    description: string,
    alt: string
}

export default function GalleryItem({picture,description,alt}: infoGalleryItem) {
    return (
        <section className={style.sectionItem}>            
            <img src={picture} alt={alt} />
            <p>{description}</p>
        </section> 
    )
}