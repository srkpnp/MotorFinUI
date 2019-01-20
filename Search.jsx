import React, { Component } from 'react';
import { debug } from 'util';

class Search extends Component {
    constructor(props) {
        console.log("check");
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.onInputChange=this.onInputChange.bind(this);
        this.state = ({
            criteria: {
                dealerNo: '',
                goodsCode: '',
                scheme: '',
                dor: '',
                cash: '',
                term: '',
                cap: '',
                depo: '',
                exchange: '',
                plan: '',
                apr: '',
                others: ''
            }
        });
    }
    handleClick(e) {
        const localCriteria = this.state;
        this.props.addOptions(localCriteria);
    }

    onInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const localCriteria = this.state.criteria;
        localCriteria[name]= value;
        this.setState({criteria:localCriteria});
    }

    render() {
        const divStyle = {
            'border-style': 'outset',
            'box-shadow': '5px 5px 5px #d9d9d9',
            'position': 'sticky',
            'top': '8px',
            'z-index': '10'
        }
        return (
            <div class="panel panel-default" style={divStyle}>
                <div class="panel-heading">Quote Engine</div>
                <div class="form-row panel-body">
                    <div class="form-group col col-md-3">
                        <label for="input1">Dealer Number:</label>
                        <input onChange={this.onInputChange} type="text" name="dealerNo" value={this.state.criteria.dealerNo} class="form-control" id="input1" placeholder="Dealer Number" />
                    </div>
                    <div class="form-group col col-md-3">
                        <label for="input2">Goods Code:</label>
                        <input onChange={this.onInputChange} type="text" name="goodsCode" value={this.state.criteria.goodsCode} class="form-control" id="input2" placeholder="Goods Code" />
                    </div>
                    <div class="form-group col col-md-3">
                        <label for="input3">Scheme</label>
                        <input onChange={this.onInputChange} type="text" name="scheme" value={this.state.criteria.scheme} class="form-control" id="input3" placeholder="Scheme" />
                    </div>
                    <div class="form-group col col-md-3">
                        <label for="input4">Date of Registration:</label>
                        <input onChange={this.onInputChange} type="date" name="dor" value={this.state.criteria.dor} class="form-control" id="input4" />
                    </div>
                    <div class="form-group col col-md-3">
                        <label for="input5">Cash Price:</label>
                        <input onChange={this.onInputChange} type="number" name="cash" value={this.state.criteria.cash} class="form-control" id="input5" placeholder="Cash Price" />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="input6">Term:</label>
                        <input onChange={this.onInputChange} type="number" name="term" value={this.state.criteria.term} class="form-control" id="input6" placeholder="Term" />
                    </div>
                    <div class="form-group col col-md-3">
                        <label for="input7">Cap Code:</label>
                        <input onChange={this.onInputChange} type="text" name="cap" value={this.state.criteria.cap} class="form-control" id="input7" placeholder="Cap Code" />
                    </div>
                    <div class="form-group col col-md-3">
                        <label for="input8">Cash Deposit:</label>
                        <input onChange={this.onInputChange} type="currency" name="depo" value={this.state.criteria.depo} class="form-control" id="input8" placeholder="Cash Deposit" />
                    </div>
                    <div class="form-group col col-md-3">
                        <label for="input9">Part Exchange:</label>
                        <input onChange={this.onInputChange} type="text" name="exchange" value={this.state.criteria.exchange} class="form-control" id="input9" placeholder="Part Exchange" />
                    </div>
                    <div class="form-group col col-md-3">
                        <label for="input10">Plan:</label>
                        <input onChange={this.onInputChange} type="text" name="plan" value={this.state.criteria.plan} class="form-control" id="input10" placeholder="Plan" />
                    </div>
                    <div class="form-group col col-md-3">
                        <label for="input10">APR:</label>
                        <input onChange={this.onInputChange} type="number" name="apr" value={this.state.criteria.apr} class="form-control" id="input10" placeholder="APR" />
                    </div>
                    <div class="form-group col col-md-3">
                        <label for="input11">Other Insurance:</label>
                        <input onChange={this.onInputChange} type="text" name="others" value={this.state.criteria.others} class="form-control" id="input11" placeholder="Other Insurance" />
                    </div>
                    <div class="col-md-offset-1 col-md-1">
                        <br />
                        <input type="button" class="form-control btn btn-sm btn-primary" id="input12" value="Submit" onClick={this.handleClick} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;