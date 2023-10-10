import MessageBox from "./messageBox";
import checkValid from '../../assets/img/svg/circle-check-solid.svg';
import errorIcon from '../../assets/img/svg/circle-xmark-solid.svg';
import style from './form.module.scss';
import Input from "./input";
import Select from "./select";
import Button from "../button";

export default function Form() {
    const messageBox = [{
        title: 'Enviado',
        image: checkValid,
        msg: 'Obrigada! Iremos avaliar a encomenda e confirmaremos por email ou wpp'
    }, {
        title: 'Error',
        image: errorIcon,
        msg: 'Inválido! Por favor revise as informações'
    }]

    const art = [{ 
        value: 'none', 
        label: 'Selecione o Tipo' 
    },{ 
        value: 'tattoo', 
        label: 'Tatuagem' 
    },{ 
        value: 'paint', 
        label: 'Pintura' 
    }]

    const pickup = [{ 
        value: 'none', 
        label: 'Selecione o Tipo' 
    },{ 
        value: 'flamengo', 
        label: 'Metrô Flamengo' 
    },{ 
        value: 'maracana', 
        label: 'Metrô Maracanã' 
    }]


    // function validateData(e: Event){
    //     e.defaultPrevented    
    //     let a =5
    //     let b = 3
    //     let soma = a + b
    //     return soma
    // }

    return (
        <div className={style.commission}>
            <h3>Encomenda</h3>
            <form>
                <Select label="Tipo arte" options={art} id="slcType" />
                <Input label="Nome completo" type="text" id="name" placeholder="Nome completo" />
                <Input label="Email" type="email" id="email" placeholder="seu-email@provedor.com" />
                <Input label="Celular" type="tel" id="cell" placeholder="(99) 99999-9999" />
                <Select label="Tipo de entrega" options={pickup} id="slcDelivery" />
                <Input label="Endereço" type="text" id="local" placeholder="Rua exemplo 99 - Bairro" />
                {/* Colocar busca por cep api do correios */}
                <Select label="Retirada" options={pickup} id="pickup" />
                <Input label="Imagem de Referência" type="file" id="ref" placeholder="" />
                <Input label="Descrição" type="text" id="descricao" placeholder="Descreva aqui a encomenda" />
                <Input label="Altura" type="number" id="alt" placeholder="cm" />
                <Input label="Largura" type="number" id="larg" placeholder="cm" />
                <Input label="Tamanho" type="number" id="size" placeholder="cm" />
                <Input label="Prazo de entrega:" type="number" id="prazo" placeholder="3 dias confecção + 2 dias para entrega" />
                <Input label="Agendamento" type="date" id="schedule" placeholder="" />
                {/* Google calendar/ Apple calendar */}    
                <Button type="submit" label="Confirmar Encomenda" />
            </form>
            <div className={style.messageBox}>
                <MessageBox title={messageBox[0].title} image={messageBox[0].image} msg={messageBox[0].msg} />
                <MessageBox title={messageBox[1].title} image={messageBox[1].image} msg={messageBox[1].msg} />
            </div>
        </div>
    )
}