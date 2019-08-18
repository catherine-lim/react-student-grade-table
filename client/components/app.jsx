import React from 'react';
import Header from './header';

import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: [],
      average: 0
    };

  }

  componentDidMount() {
    fetch(`/api/grades`)
      .then(response => response.json())
      .then(data => {
        this.setState({ grade: data });
        this.getAverageGrade();
      });

  }
  getAverageGrade() {
    var totalSum = 0;
    var allGrade = this.state.grade;

    for (var i = 0; i < allGrade.length; i++) {
      totalSum += allGrade[i].grade;
    }

    var newAverage = (totalSum / allGrade.length).toFixed(2) + '%';
    return newAverage;
  }
  render() {
    return (
      <div>
        <Header newAverage= {this.getAverageGrade()} />
        <GradeTable grade= {this.state.grade}/>
      </div>
    );
  }
}

export default App;
