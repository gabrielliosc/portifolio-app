import style from './messageBox.module.scss';

interface message {
    title: string,
    image: string,
    msg: string
}

export default function MessageBox({title,image,msg}: message){
    
    return (
        // Message box = modal
        <div className={style.box}>
            <h3>{title}</h3>
            <img src={image} />
            <p>{msg}</p>
        </div>
    )
}