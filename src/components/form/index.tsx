import MessageBox from "./messageBox";
import checkValid from '../../assets/img/svg/circle-check-solid.svg';
import errorIcon from '../../assets/img/svg/circle-xmark-solid.svg';
import style from './form.module.scss';

export default function Form() {

    const messageSuccess = {
        title: 'Enviado',
        image: checkValid,
        msg: 'Obrigada! Iremos avaliar a encomenda e confirmaremos por email ou wpp'
    }
    const messageError = {
        title: 'Error',
        image: errorIcon,
        msg: 'Inválido! Por favor revise as informações'
    }

    return (
        <div className={style.commission}>
            <h3>Encomenda</h3>
            <form>
                <label htmlFor="slcType">Tipo arte</label>
                <select id="slcType" >
                    <option value="none">Selecione o tipo</option>
                    <option value="tattoo">Tatuagem</option>
                    <option value="paint">Pintura</option>
                </select>
                <br />
                <label htmlFor="name">Nome completo</label>
                <input type="text" id="name" placeholder="Nome completo"></input>
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="seu-email@provedor.com" />
                <br />
                <label htmlFor="cell">Celular</label>
                <input type="tel" id="cell" placeholder="(99) 99999-9999" />
                <br />
                <label htmlFor="slcDelivery">Tipo de entrega</label>
                <select id="slcDelivery">
                    <option value="delivery">Entrega</option>
                    <option value="pickup">Retirada</option>
                </select>
                <br />
                <label htmlFor="local">Endereço</label>
                {/* Colocar busca por cep api do correios */}
                <input type="text" id="local" placeholder="Rua exemplo 99 - Bairro" />
                <br />
                <label htmlFor="pickup">Retirada</label>
                <select id="pickup">
                    <option value="flamengo">Metrô Flamengo</option>
                    <option value="maracana">Metrô Maracanã</option>
                </select>
                <br />
                <label htmlFor="ref">Imagem de Referência</label>
                <input type="file" id="ref" />
                <br />
                <label htmlFor="alt">Altura</label>
                <input type="number" id="alt" placeholder="cm"/>
                <br />
                <label htmlFor="larg">Largura</label>
                <input type="number" id="larg" placeholder="cm" />
                <br />
                <label htmlFor="size">Tamanho</label>
                <input type="number" id="size" placeholder="cm" />
                <br />
                <label htmlFor="prazo">Prazo de entrega:</label>
                <br />
                <i id="prazo">3 dias confecção + 2 dias para entrega</i>
                <br />
                <label htmlFor="schedule">Agendamento</label>
                <input type="date" id="schedule" /> {/* Google calendar/ Apple calendar */}
                <button type="submit">Criar Encomenda</button>
            </form>
            <div>
                <MessageBox title={messageSuccess.title} image={messageSuccess.image} msg={messageSuccess.msg} />
                <MessageBox title={messageError.title} image={messageError.image} msg={messageError.msg} />
            </div>
        </div>
    )
}