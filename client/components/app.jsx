import React from 'react';
import Header from './header';

import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: []

    };
  }
  componentDidMount() {
    fetch(`/api/grades`)
      .then(response => response.json())
      .then(data => this.setState({ grade: data }));
  }

  render() {
    return (
      <div>
        <Header></Header>
        <GradeTable grade= {this.state.grade}/>

      </div>
    );
  }
}

export default App;
