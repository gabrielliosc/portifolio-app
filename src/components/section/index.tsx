import style from './section.module.scss';
interface infoSection{
    icon: string,
    description: string
    route: string
}

export default function Section({icon,description,route}: infoSection) {
    return (
        <div className={style.sectionItem}>            
            <a href={route}><img src={icon} /></a>
            <p>{description}</p>
        </div> 
    )
}