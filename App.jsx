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
    console.log(criteria);
    console.log(JSON.stringify(criteria));
    fetch("https://3000-dot-9847278-dot-devshell.appspot.com/?authuser=schagantisri@gmail.com&password=y5mc47sri&environment_name=default&environment_id=default")
      .then(results => {
        return results.json();
      })
      .then(resultsJson => {
        console.log(resultsJson);
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
