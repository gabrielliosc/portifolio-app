import Menu from "./menu";
import style from "./header.module.scss"

export default function Header(){
    return (
    <div className={style.header}>
        <h1 className={style.item1}>NAJU</h1>
        <span className={style.item2}><Menu /></span> 
    </div>
    )
}