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
    let request = JSON.stringify(criteria.criteria);
    fetch("http://demo8969103.mockable.io/mockpost", {
      method: 'post',
      body: request
    })
      .then(results => {
        return results.json();
      })
      .then(resultsJson => {
        this.setState({ visibleOptions: resultsJson.products });
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
