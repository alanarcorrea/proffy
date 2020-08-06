import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/15933128?s=460&u=d09ec6ff66f122451587c5a434586d59a99bc216&v=4" 
                alt="Alana Corrêa" />
                <div>
                    <strong>Alana Corrêa</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias do mundo.
                <br /> <br/>
                Apaixonada por codar códigos malucos e inteligentes. Coisas que possam melhorar a vida das pessoas e 
                facilitar seu dia a dia. Mais de 50000.0000 pessoas já tiveram sua vida impactada por mim.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;