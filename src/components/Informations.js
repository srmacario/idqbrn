import stylesCorpo from "./css/stylesCorpo.module.css"
import React from 'react'
import { useParams } from "react-router-dom";

export default function Informations() {
    let { doencaNome } = useParams();
    return (
        <>
            <div className={stylesCorpo.cabecalho}>
                <div className={stylesCorpo.pagina}>Informativo</div>
            </div>
            <div className={stylesCorpo.corpo}>
                <div className={stylesCorpo.doenca}>
                    <div className={stylesCorpo.caixa}>
                    </div>
                    <div className={stylesCorpo.identificacao}>
                        <p className={stylesCorpo.nome}>{doencaNome}</p>
                        <p className={stylesCorpo['sub-nome']}>Nome Científico</p>
                    </div>
                </div>
                <div className={stylesCorpo.conteudo}>
                    <p className={stylesCorpo.info}>Formas de Contágio: </p>
                    <p className={stylesCorpo.dados}>Lorem ipsum lorem ipsum.</p>
                    <p className={stylesCorpo.info}>Sintomas: </p>
                    <p className={stylesCorpo.dados}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ornare dolor, non
                        commodo velit pulvinar nec. In volutpat volutpat commodo. Nunc ut velit maximus, placerat nunc sed,
                        pellentesque dui. Suspendisse id finibus nunc, quis sagittis orci. Suspendisse eleifend ante lorem, et
                        semper nisi interdum quis.</p>
                    <p className={stylesCorpo.info}>Recomendações: </p>
                    <p className={stylesCorpo.dados}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ornare dolor, non
                        commodo velit pulvinar nec. In volutpat volutpat commodo. Nunc ut velit maximus, placerat nunc sed,
                        pellentesque dui. Suspendisse id finibus nunc, quis sagittis orci. Suspendisse eleifend ante lorem, et
                        semper nisi interdum quis.</p>
                </div>
            </div>
        </>

    );
}