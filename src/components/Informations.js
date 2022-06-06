import stylesCorpo from "./css/stylesCorpo.module.css"
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios'
// class Informations extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             formas_de_contagio : "",
//             sintomas : "",
//             recomendacoes:"",
//             doenca : this.props.match.params.id
//         }
//     }
//     async componentDidMount(){
//         axios.post('http://localhost:8080/info/doenca',this.state.doenca)
//     }

//     render(){
//         let doencaNome = this.props.doenca
//         return (
//             <>
//                 <div className={stylesCorpo.cabecalho}>
//                     <div className={stylesCorpo.pagina}>Informativo</div>
//                 </div>
//                 <div className={stylesCorpo.corpo}>
//                     <div className={stylesCorpo.doenca}>
//                         <div className={stylesCorpo.caixa}>
//                         </div>
//                         <div className={stylesCorpo.identificacao}>
//                             <p className={stylesCorpo.nome}>{doencaNome}</p>
//                             <p className={stylesCorpo['sub-nome']}>Nome Científico</p>
//                         </div>
//                     </div>
//                     <div className={stylesCorpo.conteudo}>
//                         <p className={stylesCorpo.info}>Formas de Contágio: </p>
//                         <p className={stylesCorpo.dados}>Lorem ipsum lorem ipsum.</p>
//                         <p className={stylesCorpo.info}>Sintomas: </p>
//                         <p className={stylesCorpo.dados}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ornare dolor, non
//                             commodo velit pulvinar nec. In volutpat volutpat commodo. Nunc ut velit maximus, placerat nunc sed,
//                             pellentesque dui. Suspendisse id finibus nunc, quis sagittis orci. Suspendisse eleifend ante lorem, et
//                             semper nisi interdum quis.</p>
//                         <p className={stylesCorpo.info}>Recomendações: </p>
//                         <p className={stylesCorpo.dados}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ornare dolor, non
//                             commodo velit pulvinar nec. In volutpat volutpat commodo. Nunc ut velit maximus, placerat nunc sed,
//                             pellentesque dui. Suspendisse id finibus nunc, quis sagittis orci. Suspendisse eleifend ante lorem, et
//                             semper nisi interdum quis.</p>
//                     </div>
//                 </div>
//             </>
    
//         );
//     }
// }
// export default Informations;

export default function Informations() {
    let { doencaNome } = useParams();
    const[formaDeContagio, setFormasDeContagio] = useState("");
    const[sintomas, setSintomas] = useState("");
    const[recomendacoes, setRecomendacoes] = useState("");
    function capitalize_first_letter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        doencaNome = doencaNome.toLowerCase();
        doencaNome = capitalize_first_letter(doencaNome);
        axios.post('http://localhost:8080/info/doenca',{doenca:doencaNome})
        .then(res =>{
            setFormasDeContagio(res.data.formasdecontagio);
            setRecomendacoes(res.data.recomendacoes);
            setSintomas(res.data.sintomas);
        })
    });
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
                    </div>
                </div>
                <div className={stylesCorpo.conteudo}>
                    <p className={stylesCorpo.info}>Formas de Contágio: </p>
                    <p className={stylesCorpo.dados}>{formaDeContagio}</p>
                    <p className={stylesCorpo.info}>Sintomas: </p>
                    <p className={stylesCorpo.dados}>{sintomas}</p>
                    <p className={stylesCorpo.info}>Recomendações: </p>
                    <p className={stylesCorpo.dados}>{recomendacoes}</p>
                </div>
            </div>
        </>

    );
}