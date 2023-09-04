
interface infoSection{
    icon: string,
    description: string
    route: string
}

export default function Section({icon,description,route}: infoSection) {
    return (
        <div>            
            <a href={route}><img src={icon} /></a>
            <p>{description}</p>
        </div> 
    )
}