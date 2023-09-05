import Social from './social';
import style from './footer.module.scss';


export default function Footer(){
    return(
        <div className={style.footer}>
            <Social />
            <p>Desenvolvido por <a href="https://github.com/gabrielliosc">Gabrielli (icone)</a></p>
        </div>
    )
}