import style from './section.module.scss';
interface infoSection{
    icon: string,
    description: string
    route: string
}

export default function Section({icon,description,route}: infoSection) {
    return (
        <section className={style.sectionItem}>            
            <a href={route}><img src={icon} alt='Acrilica Sob Tela' /></a>
            <p>{description}</p>
        </section> 
    )
}