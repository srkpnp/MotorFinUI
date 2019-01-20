import React, { Component } from 'react';
import Search from './Search.jsx';
import MyOptions from './MyOptions.jsx';

const divStyle = {
  'background-image': 'url("background.jpg")'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({ visibleOptions: [], updatedOptions: [] });
    this.getMyOptions = this.getMyOptions.bind(this);
  }

  getMyOptions(criteria) {
    let screenInputs = Object.assign({},criteria.criteria);
    if (!screenInputs.dealerNo || !screenInputs.goodsCode) {
      screenInputs.dealerNo = 1;
      screenInputs.goodsCode = 1;
    }
    let request = JSON.stringify(screenInputs);
    fetch("http://35.176.87.139:3000/create", {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: request
    })
      .then(results => {
        return results.json();
      })
      .then(resultsJson => {
        let resultsValue = [];
        if (resultsJson instanceof Array) {
          resultsJson.map((value) => {
            if (value.productname) {
              resultsValue.push(value);
            }
          });
          this.setState({ visibleOptions: resultsValue });
        }
        else {
          resultsValue.push(resultsJson);
          this.setState({ visibleOptions: resultsValue });
        }
      });
  }

  render() {
    return (
      <div style={divStyle}>
        <Search addOptions={this.getMyOptions} />
        <MyOptions options={this.state.visibleOptions} />
      </div>
    );
  }
}

export default App;
