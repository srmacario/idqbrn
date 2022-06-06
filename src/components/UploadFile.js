import axios from "axios";
import React from "react";
import stylesCorpo from "./css/stylesCorpo.module.css"

class UploadFile extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedFile: null
        }
    }

    onFileChange = async event => {
        await this.setState({ selectedFile: event.target.files[0] });
        console.log(this.state.selectedFile);
    };

    onFileUpload = async () => {
        const formData = new FormData();
        console.log("bad*-")
        await formData.append(
            "myFile",
            this.state.selectedFile
        );
        console.log(formData);
        axios.post('http://localhost:8080/updatecsv', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response.data.status)
                if (response.data.status === 'ok') {
                    alert('Banco de Dados foi substituído com sucesso!')
                }
                else {
                    alert('Falha no envio do arquivo!')
                }
                console.log(response.data)
            });
    };

    render() {

        return (
            <>
                <div>
                    <div className={stylesCorpo.cabecalho}>
                        <div className={stylesCorpo.pagina}>Upload de Arquivo CSV</div>
                    </div>
                </div>

                <div className={stylesCorpo.corpo}>
                    <div className={stylesCorpo.containerUpload}>
                        <div className={stylesCorpo['card-header']} ><b>Selecione um novo .CSV com dados para reescrever o Banco de Dados Atual:</b></div>
                        <div className={stylesCorpo['card-body']}>
                            <p />
                            <input className={stylesCorpo.upload} type="file" name="myFile" onChange={this.onFileChange} encType="multipart/form-data" />
                            <br />
                            <br />
                            <br />
                            <br />
                            <button className={stylesCorpo.input} onClick={this.onFileUpload}>
                                Upload
                            </button>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
export default UploadFile;
