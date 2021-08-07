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
      <section class="sheet padding-10mm">
        {this.state.data.body?.map(block => Components(block))}
      </section>
    );
  }
}
export default App;
