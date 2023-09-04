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
        <ul>
            {pages.map((page, index) => (
                <li key={index}> 
                    <a href={page.route}>{page.description}</a>                    
                </li>
            ))}
        </ul>
    )
}