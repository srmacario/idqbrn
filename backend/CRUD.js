const mongoose = require("mongoose");
const fs = require('fs');
require('dotenv').config();

function crud_delete(ibge7, db) {
    db.deleteOne({ IBGE7: ibge7 });
};


function to_csv() {
    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri, {
        useNewUrlParser: true,
        //useCreateIndex: true
    });
    const connection = mongoose.connection;
    connection.once('open', () =>{
        console.log("MongoDB connection estabilished successfully");
        var header = "UF,Municipio,IBGE,IBGE7,UF,Município,latitude,longitude,Região,População 2010,Porte,BOTULISMO,LEISHMANIOSE VISCERAL,LEISHMANIOSE TEGUMENTAR,FEBRE AMARELA,DENGUE,HEPATITE VIRAL,FEBRE MACULOSA,LEPTOSPIROSE,DOENÇA DE CHAGAS,PICADAS DE COBRAS,ZIKA VÍRUS,FEBRE TIFÓIDE,HANTAVIROSE,MENINGITE,RAIVA";
        header += '\n';
        fs.writeFile('out.csv', header, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        var line = "";
        connection.collection("dados").find().forEach(function(doc){
            line += doc.UF + ',' + doc["Municipio"] + ',' + doc["IBGE"] + ',' + doc["IBGE7"] + ',' + doc["UF"]
            + ',' + doc["Município"] + ',' + "\"" + doc["latitude"] +"\"" +',' +"\"" + doc["longitude"] + "\""  + ',' + doc["Região"]
            + ',' + doc["População 2010"] + ',' + doc["Porte"] + ',' + doc["BOTULISMO"] + ',' + doc["LEISHMANIOSE VISCERAL"] + ',' + doc["LEISHMANIOSE TEGUMENTAR"] + ',' + doc["FEBRE AMARELA"] + ',' + 
            doc["HEPATITE VIRAL"] + ',' + doc["FEBRE MACULOSA"] + ',' + doc["LEPTOSPIROSE"] + ',' + doc["DOENÇA DE CHAGAS"] + ',' + doc["PICADAS DE COBRAS"] + ',' + doc["ZIKA VÍRUS"] + ',' + 
            doc["FEBRE TIFÓIDE"] + ',' + doc["HANTAVIROSE"]+ ',' + doc["MENINGITE"] + ',' + doc["RAIVA"];
            //fs.appendFile("output.csv",line);
            line += '\n';
        }).then( () => {
            fs.appendFile('out.csv', line, function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
            connection.close();
            console.log("connection closes");
        })
    });
}
to_csv();

// console.log("Cidades da Região Norte com números de casos de dengue >= 600")
                // var query = connection.collection("dados").find({Região : "Região Norte"}).forEach(function(d){
                //     d['DENGUE'] = parseInt(d['DENGUE']);
                //     if(d.DENGUE >= 800){
                //         console.log("aqui******************");
                //         console.log(d);
                //         //fs.appendFile("saida.txt",JSON.stringify(d));
                //     } 
                // });