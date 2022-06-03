import "./css/styleCorpo.css";
import React from 'react'
import { useParams } from "react-router-dom";

export default function Informations() {
    let { doencaNome } = useParams();
    return (
        <>
            <div className="cabecalho">
                <div className="pagina">Informativo</div>
            </div>
            <div className="corpo">
                <div className="doenca">
                    <div className="caixa">
                    </div>
                    <div className="identificacao">
                        <p className="nome">{doencaNome}</p>
                        <p className="sub-nome">Nome Científico</p>
                    </div>
                </div>
                <div className="conteudo">
                    <p className="info">Formas de Contágio: </p>
                    <p className="dados">Lorem ipsum lorem ipsum.</p>
                    <p className="info">Sintomas: </p>
                    <p className="dados">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ornare dolor, non
                        commodo velit pulvinar nec. In volutpat volutpat commodo. Nunc ut velit maximus, placerat nunc sed,
                        pellentesque dui. Suspendisse id finibus nunc, quis sagittis orci. Suspendisse eleifend ante lorem, et
                        semper nisi interdum quis.</p>
                    <p className="info">Recomendações: </p>
                    <p className="dados">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ornare dolor, non
                        commodo velit pulvinar nec. In volutpat volutpat commodo. Nunc ut velit maximus, placerat nunc sed,
                        pellentesque dui. Suspendisse id finibus nunc, quis sagittis orci. Suspendisse eleifend ante lorem, et
                        semper nisi interdum quis.</p>
                </div>
            </div>
        </>

    );
}