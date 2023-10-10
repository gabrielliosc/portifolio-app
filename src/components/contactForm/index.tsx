import Button from "../button";
import Input from "../form/input";

export default function ContactForm(){
    return (
        <form>
            <Input id="name" type="text" label="Nome completo" placeholder="Nome Sobrenome" />
            <Input id="email" type="text" label="Insira seu email" placeholder="email@provedor.com" />
            <Input id="message" type="text" label="Como posso ajudar?" placeholder="" />
            <Input id="newsletter" type="checkbox" label="Deseja receber atualizações" placeholder="" />
            <Input id="termos" type="checkbox" label="Concordo com os termos de tratamento dos dados" placeholder="" />
            <Button type="submit" label="Enviar mensagem" />
        </form>
    )
}