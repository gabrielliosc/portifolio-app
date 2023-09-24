import { useState } from 'react';
import style from './messageBox.module.scss';

interface message {
    title: string,
    image: string,
    msg: string,
}
interface close {
    hide: boolean
}

export default function MessageBox({ title, image, msg }: message, { hide }: close) {

    let [closeMessage, setCloseMessage] = useState<close>({
        hide: true
    });

    return (
        <div onClick={() => { setCloseMessage({ hide: !closeMessage.hide }) }
        } className={(closeMessage.hide) ? style.box : style.hide}>
            <p className={style.close}>X</p>
            <h3>{title}</h3>
            <img src={image} />
            <p>{msg}</p>
        </div>
    )
}