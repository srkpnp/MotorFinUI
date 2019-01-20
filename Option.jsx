import React, { Component } from 'react';

const aStyle = {
    'margin-bottom': '45px',
    'margin-right': '45px',
    'background-color': 'GainsBoro',
    'border-color': 'GainsBoro',
    'border-style': 'outset',
    'width': '98%',
    'box-shadow': '5px 5px 5px GainsBoro'
};

const divStyle = {
    'padding': '0px',
    'margin': '0px'
}

const p = {
    'text-transform': 'capitalize',
    'text-align': 'justify'
}

const shorthand = {
    'list-style': 'inside',
    'padding': '0px',
    'margin': '0px',
    'text-align': 'justify'
}


class Option extends Component {
    constructor(props) {
        super(props);
        this.state = { data: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({ data: true });
    }
    render() {
        return (<div style={divStyle}><a onClick={this.handleClick} class="btn btn-default btn-lg" style={aStyle}>
            <p style={p}>{this.props.productname}</p>{this.props.additionalText.map((additionalText, i) => <AdditionalText key={i} text={additionalText} />)}</a></div>);
    }
}

class AdditionalText extends Component {
    render() {
        return (
            <li style={shorthand}>{this.props.text}</li>
        );
    }
}

export default Option;