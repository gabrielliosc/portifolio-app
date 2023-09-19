import style from './about.module.scss';
import artistProfile from '../../assets/img/png/artist-profile.png';
import faleComigo from '../../assets/img/png/fale-comigo.png';

const classImg = `=${style.collumn} ${style.artistPicture}`

export default function About() {
    return (
        <div className={style.about}>
            <h2>Quem sou eu?</h2>
            <div className={style.artist}>
                <span className={style.collumn}>
                    <h3>Anna Júlia</h3>
                    <p>Sobre mim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue urna at condimentum pharetra. Nullam consectetur nisi magna, sit amet vehicula metus tempor nec. Nulla a eros quis sem faucibus pellentesque. Sed ultrices ornare ante vel egestas. Nam dui sapien, pretium non molestie eget, imperdiet vitae tortor. Integer ullamcorper faucibus sapien, sit amet dictum orci malesuada vitae. Sed sed tincidunt risus. Suspendisse venenatis pellentesque mauris ac varius. Sed eget mauris a ipsum mattis lacinia at vel purus. Donec a maximus ligula. Vestibulum vulputate, urna at consequat fringilla, urna urna vehicula risus, vitae sollicitudin massa lectus quis ipsum. Integer urna risus, mollis sit amet felis ut, ultricies varius nisi. Vestibulum cursus eros commodo tortor accumsan</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue urna at condimentum pharetra. Nullam consectetur nisi magna, sit amet vehicula metus tempor nec. Nulla a eros quis sem faucibus pellentesque. Sed ultrices ornare ante vel egestas. Nam dui sapien, pretium non molestie eget, imperdiet vitae tortor. Integer ullamcorper faucibus sapien, sit amet dictum orci malesuada vitae. Sed sed tincidunt risus. Suspendisse venenatis pellentesq</p>
                    <a href="https://api.whatsapp.com/send?phone=5521999999999"><img src={faleComigo} alt="Fale Comigo" className={style.chat}></img></a>
                </span>
                <img src={artistProfile} alt="Foto da Artista - Anna Júlia" className={classImg}></img>              
            </div>  
        </div>
    )
}