import Section from '../section';
import style from './work.module.scss';
import paintIcon from '../../assets/img/svg/palette-solid.svg';
import tattooIcon from '../../assets/img/svg/syringe-solid.svg';
import otherIcon from '../../assets/img/svg/book-open-solid.svg';

export default function Work() {

    const sections = [{
        icon: paintIcon,
        description: 'Acrilica Sob Tela',
        route: './acrilica'
    },
    {
        icon: tattooIcon,
        description: 'Tatuagem',
        route: './tatuagem'
    },
    {
        icon: otherIcon,
        description: 'Outras expressões artisticas',
        route: './outras'
    }]

    return (
        <div className={style.work}>
            <h2>EU TRABALHO COM...</h2>
            <div className={style.sections}>
                {sections.map((section, index) => (
                    <Section key={index} icon={section.icon} description={section.description} route={section.route} />
                ))}
            </div>
        </div>
    )
}