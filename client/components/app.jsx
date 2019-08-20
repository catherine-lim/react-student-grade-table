import React from 'react';
import Header from './header';

import GradeTable from './gradetable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: [],
      average: 0
    };
    // this.addStudent = this.addStudent.bind(this);
    // this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  componentDidMount() {
    fetch(`/api/grades`)
      .then(response => response.json())
      .then(data => {
        this.setState({ grade: data });
        this.getAverageGrade();

      });
  }
  addStudent(newgrade) {
    fetch(`/api/grades`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newgrade)
    })
      .then(response => response.json())
      .then(newgrade => this.setState({ grade: this.setState.grade.concat(newgrade) }));

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
        <GradeForm onSubmit={this.addStudent}/>
      </div>
    );
  }
}

export default App;
