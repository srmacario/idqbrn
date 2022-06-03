import React from 'react'
import Select from 'react-select'
import ImeLogo from './img/imeLogo.png'
import SearchBox from './SearchBox'

// class MenuNav extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dados: props.dataParentToChild
//         }
//     }
//     render() {
//         console.log('stdados' + this.state.dados);
//         const dados = this.state.dados;
//         console.log("menuNav");
//         console.log(dados);
//         return (
//             <div className="menuNav">
//                 <div className="titulo">
//                     <img className="logo" src={ImeLogo} />
//                 </div>

//                 <div className="container">
//                     <div className="wrap">
//                         <div className="search">
//                             {/* <SearchBox type="search" className = "searchTerm" placeholder="Buscar..." 
//                             handleChange={(e) => console.log(e.target.value)}/> */}
//                             <Select options={dados}

//                             />
//                             <button type="submit" className="searchButton">
//                                 <i className="fa fa-search"></i>
//                             </button>
//                         </div>
//                     </div>

//                     <div className="containerList">
//                         <ul className="ks-cboxtags">
//                             <li><input type="checkbox" id="checkboxOne" value="Dengue" /><label for="checkboxOne">Dengue</label>
//                             </li>
//                             <li><input type="checkbox" id="checkboxTwo" value="Febre Amarela" checked /><label
//                                 for="checkboxTwo">Febre Amarela</label></li>
//                             <li><input type="checkbox" id="checkboxThree" value="Esquistossomose" checked /><label
//                                 for="checkboxThree">Esquistossomose</label></li>
//                             <li><input type="checkbox" id="checkboxFour" value="Malária" /><label
//                                 for="checkboxFour">Malária</label></li>
//                             <li><input type="checkbox" id="checkboxFive" value="Tuberculose" /><label
//                                 for="checkboxFive">Tuberculose</label></li>
//                             <li><input type="checkbox" id="checkboxSix" value="Leishmaniose" checked /><label
//                                 for="checkboxSix">Leishmaniose</label></li>
//                             <li><input type="checkbox" id="checkboxSeven" value="Doença de Chagas" /><label
//                                 for="checkboxSeven">Doença de Chagas</label></li>
//                             <li><input type="checkbox" id="checkboxEight" value="Leptospirose" /><label
//                                 for="checkboxEight">Leptospirose</label></li>
//                             <li><input type="checkbox" id="checkboxNine" value="Arboviroses Urbanas" /><label
//                                 for="checkboxNine">Arboviroses Urbanas</label></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default MenuNav;

// const filterOptions = (
//     candidate: {label:string, value:tring}},
//     input:string) =>{

//     }
// )



export default function MenuNav(props) {
    const dados = props.dados;
    const cidades_opt = props.cidades_opt;
    const filterConfig = {
        ignoreCase: false,
        ignoreAccents: true,
        trim: true,
        matchFrom: 'start',
        stringify: option => `${option.label} ${option.value}`
    };
    //var cidades_opt = [];
    console.log('menunav');
    console.log(dados);
    console.log(cidades_opt);
    // dados.forEach(element => {
    //     cidades_opt.push({label: element['Municipio'], value: element['Municipio']});
    // });
    console.log(cidades_opt);
    return (
        <div className="menuNav">
            <div className="titulo">
                <img className="logo" src={ImeLogo} />
            </div>

            <div className="container">
                <div className="wrap">
                    <div className="search">
                        {/* <SearchBox type="search" className = "searchTerm" placeholder="Buscar..." 
                        handleChange={(e) => console.log(e.target.value)}/> */}
                        <Select options={cidades_opt} placeholder="Buscar..."
                            openMenuOnClick={true} filterConfig={filterConfig}

                        />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>

                <div className="containerList">
                    <ul className="ks-cboxtags">
                        <li><input type="checkbox" id="checkboxOne" value="Dengue" /><label for="checkboxOne">Dengue</label>
                        </li>
                        <li><input type="checkbox" id="checkboxTwo" value="Febre Amarela" checked /><label
                            for="checkboxTwo">Febre Amarela</label></li>
                        <li><input type="checkbox" id="checkboxThree" value="Esquistossomose" checked /><label
                            for="checkboxThree">Esquistossomose</label></li>
                        <li><input type="checkbox" id="checkboxFour" value="Malária" /><label
                            for="checkboxFour">Malária</label></li>
                        <li><input type="checkbox" id="checkboxFive" value="Tuberculose" /><label
                            for="checkboxFive">Tuberculose</label></li>
                        <li><input type="checkbox" id="checkboxSix" value="Leishmaniose" checked /><label
                            for="checkboxSix">Leishmaniose</label></li>
                        <li><input type="checkbox" id="checkboxSeven" value="Doença de Chagas" /><label
                            for="checkboxSeven">Doença de Chagas</label></li>
                        <li><input type="checkbox" id="checkboxEight" value="Leptospirose" /><label
                            for="checkboxEight">Leptospirose</label></li>
                        <li><input type="checkbox" id="checkboxNine" value="Arboviroses Urbanas" /><label
                            for="checkboxNine">Arboviroses Urbanas</label></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}