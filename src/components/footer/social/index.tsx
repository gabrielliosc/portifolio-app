import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from '@fortawesome/free-solid-svg-icons'
import style from './social.module.scss';

const socialMedia = [{
    name: 'Instagram - Pessoal',
    icon: 'instagram',
    url: 'http://instagram.com/'
},{
    name: 'Instagram - Tatuagem',
    icon: 'instagram',
    url: 'http://instagram.com/'
},{
    name: 'Twitter',
    icon: 'instagram',
    url: 'http://x.com/'
},{
    name: 'Whatsapp',
    icon: 'instagram',
    url: 'https://api.whatsapp'
}]

export default function Social() {
    return (
        <div className={style.social}>
            <h4>Social Media</h4>
            <ul className={style.links}>
            {socialMedia.map((media,index) => (
                <a href={media.url} target="_blank" className={style.item} key={index}>
                    <li>
                        ICONE
                        <span>{media.name}</span>
                    </li>
                </a>
            ))}
            </ul>
        </div>
    )
}