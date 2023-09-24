import style from './input.module.scss';

interface input {
    label: string,
    type: string,
    id: string,
    placeholder: string
}


export default function Input({label,type,id,placeholder}: input) {

    return (
        <div className={style.input}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} />
            <br />           
        </div>
    )
}