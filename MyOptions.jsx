import React, { Component, PropTypes } from 'react'
import Option from './Option.jsx'

export default class MyOptions extends Component {
    render() {
        return (<div class="btn-group-justified">
            {this.props.options.map(option =>
               <Option key = {option.productid}
                  {...option}/>
            )}</div>)
    }
}

MyOptions.defaultProps = {
    options:[]
}