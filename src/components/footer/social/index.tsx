import style from './social.module.scss';
import instagramIcon from '../../../assets/img/svg/instagram.svg';
import whatsappIcon from '../../../assets/img/svg/whatsapp.svg';
import emailIcon from '../../../assets/img/svg/envelope-regular.svg';

const socialMedia = [{
    name: 'Instagram - Pessoal',
    icon: instagramIcon,
    url: 'https://www.instagram.com/jesuisnaju/'
},{
    name: 'Instagram - Tatuagem',
    icon: instagramIcon,
    url: 'https://www.instagram.com/najunatatu/'
},{
    name: 'Whatsapp',
    icon: whatsappIcon,
    url: 'https://api.whatsapp'
},{
    name: 'Email',
    icon: emailIcon,
    url: 'mailto:jesuisnaju@gmail.com'
}]

export default function Social() {
    return (
        <div className={style.social}>
            <h4>Social Media</h4>
            <ul className={style.links}>
            {socialMedia.map((media,index) => (
                <a href={media.url} target="_blank" className={style.item} key={index}>
                    <li>
                        <img src={media.icon} alt={media.name} />
                    </li>
                </a>
            ))}
            </ul>
        </div>
    )
}