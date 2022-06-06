import axios from "axios";
import React from "react";
import stylesCorpo from "./css/stylesCorpo.module.css"
//const csvtojson = require('csvtojson');
//import csvtojson from 'csvtojson'


class UploadFile extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedFile: null
        }
    }

    onFileChange = async event =>{
        await this.setState({selectedFile : event.target.files[0]});
        console.log(this.state.selectedFile);
    };

    onFileUpload =  async() =>{
        const formData =  new FormData();
        console.log("bad*-")
        await formData.append(
            "myFile",
            //fs.createReadStream(this.state.selectedFile),
            this.state.selectedFile
        );
        console.log(formData);
        axios.post('http://localhost:8080/dados/',formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
    };
    // onFileUpload = () =>{
    //     console.log(this.state.selectedFile);
    //     csvtojson.
    //     csvtojson().fromFile(this.state.selectedFile.name)
    //     .then(csvData => {
    //         console.log(csvData);
    //         axios.post('http://localhost:8080/dados/',csvData);
    //     })
    //     .catch(err => console.log(err));
    // };
    

    render() {

        return (
            <>
                <div>
                    <div className={stylesCorpo.cabecalho}>
                        <div className={stylesCorpo.pagina}>Upload de Arquivo CSV</div>
                    </div>
                </div>

                <div className={stylesCorpo.corpo}>
                    <div >
                        <div >
                            <div  >
                                <div ><b>Fazer upload de novo Exel com dados</b></div>
                                <div >

                                    <input type="file"  name="myFile" onChange={this.onFileChange} enctype="multipart/form-data"/>
                                    <button onClick={this.onFileUpload}>
                                        Upload
                                    </button>

                                </div>
                            </div>
                            {/* <div id="excel_data"  style="overflow-x: scroll; overflow-y: scroll; max-height:800px;"></div> */}
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
export default UploadFile;