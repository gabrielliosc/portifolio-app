import style from './menu.module.scss';

export default function Menu() {
    const pages = [{
        description: 'Home',
        route: './'
    }, {
        description: 'Acrílica Sob Tela',
        route: './'
    }, {
        description: 'Tatuagem',
        route: './'
    }, {
        description: 'Outras formas de expressão artística',
        route: './'
    },
    {
        description: 'Contato',
        route: './'
    }]

    return (
        <ul className={style.nav}>
            {pages.map((page, index) => (
                <div>
                    <li key={index}> </li>                                         
                    <a href={page.route}>{page.description}</a> 
                </div>
            ))}
        </ul>
    )
}