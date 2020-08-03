import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEIrRvehJXnzA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=cfQH-8h7WLFaKQssx9JrKrznhCk-hlR88hLZz4tT4ws" alt="Isabela Narde"/>
                <div>
                    <strong>Isabela Narde</strong>
                    <span>Biologia</span>
                </div>
            </header>

            <p>
                Pesquisadora de microbiologia e células troncos.
                <br /><br />
                Apaixonada por fermentação e alquimias gastronômicas. Já ajudou mais de 50 mil alunos a entender como os micros organismos funcionam e como eles são capazes de deixar um pão fofinho. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 70,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;