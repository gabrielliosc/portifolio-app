import style from './select.module.scss';

interface arrayOptions {
    value: string,
    label: string
}
interface props {
    label: string,
    options: Array<arrayOptions>,
    id: string
}

export default function Select({label,options,id}: props){
    return(
        <div className={style.select}>
            <label htmlFor={id}>{label}</label>        
            <select id={id}>
                {options.map((item)=>(
                <option value={item.value}>{item.label}</option>
                ))} 
            </select>
            <br />
        </div>  
    )
}