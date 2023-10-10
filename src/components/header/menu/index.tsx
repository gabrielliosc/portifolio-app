import { useState } from 'react';
import style from './menu.module.scss';
import { Link } from 'react-router-dom';

interface activeHamb {
    show: boolean;
}
export default function Menu() {
    
    let [active, setActive] = useState<activeHamb>({
        show: true
    });

    const styleLine1 = `${style.line} ${style.line1}`;
    const styleLine2 = `${style.line} ${style.line2}`;
    const styleLine3 = `${style.line} ${style.line3}`;
    const styleActive = `${style.btn} ${style.active}`;

    const pages = [{
        description: 'Home',
        route: '/'
    }, {
        description: 'Pronta Entrega',
        route: '/produtos'
    }, {
        description: 'Encomenda',
        route: '/encomendas'
    }, {
        description: 'Outras formas de expressão artística(blog)',
        route: '/others'
    },
    {
        description: 'Contato',
        route: '/contato'
    }]

    return (
        <nav>
            <div onClick={() => {setActive({show: !active.show})}
                } className={(active.show)? style.btn : styleActive}>
                <span className={styleLine1}></span>
                <span className={styleLine2}></span>
                <span className={styleLine3}></span>
            </div>
            <ul className={(active.show)? style.hide : style.show}>
                {pages.map((page, index) => (
                    <div>
                        <li key={index}>
                            <Link to={page.route}>{page.description}</Link>
                        </li>
                    </div>
                ))}
            </ul>
        </nav>
    )
}