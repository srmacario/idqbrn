import stylesMapa from "./css/stylesMapa.module.css"
import React from "react";

export default class NewCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    openPage() {
        var link = '/info/' + this.props.value;
        this.props.navigate(link);
    }

    render() {

        return <>
            <input type="checkbox" id={this.props.id} onChange={this.props.onChange} onClick={() => this.setState({ show: !this.state.show })} value={this.props.value} defaultChecked={this.props.defaultChecked} />
            <label htmlFor={this.props.id} >{this.props.value}</label>
            {this.state.show ? <button className={stylesMapa.outline} onClick={() => this.openPage()}>Mais Informações...</button> : null}
        </>;
    }
}