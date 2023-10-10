import style from './button.module.scss';

interface buttonProps {
    label: string,
    type: "button" | "submit" | "reset" | undefined
}

export default function Button({label,type="button"}:buttonProps){
    return (
        <button className={style.button} type={type}>{label}</button>
    )
}