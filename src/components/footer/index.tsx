import Social from './social';
import style from './footer.module.scss';
import gabrielliLogo from '../../assets/img/png/logo_gabrielli_light.png';


export default function Footer() {
    return (
        <div className={style.footer}>
            <Social />
            <section>
                <a href="https://github.com/gabrielliosc">
                    <img src={gabrielliLogo} alt="" />
                    <span>Desenvolvido por Gabrielli</span>
                </a>
            </section>
        </div>
    )
}