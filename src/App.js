import React, {Component} from "react";
import './App.css';
import Components from './components'

class App extends Component {
  constructor() {
    super();
    this.state = { data: {} };
  }

  componentDidMount() {
    fetch(`content.json`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="row">
            {this.state.data.body?.map(block => Components(block))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
