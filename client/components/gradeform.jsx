import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const newgrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onClick(newgrade);
    this.resetForm();

  }
  handleChangeName(event) {

    this.setState({ name: event.target.value });
  }
  handleChangeCourse(event) {

    this.setState({ course: event.target.value });
  }
  handleChangeGrade(event) {

    this.setState({ grade: event.target.value });
  }
  resetForm(event) {
    event.preventDefault();
    this.setState({
      name: '',
      course: '',
      grade: ''
    });

  }
  render() {
    return (
      <div>
        <label>
          <form onSubmit={this.handleSubmit}>
            <i className="fas fa-user"> </i>
            <input type="name" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChangeName} />
          </form>

          <form>
            <i className="fas fa-clipboard-list"></i>
            <input type="text" name="course" placeholder="Course" value={this.state.course} onChange={this.handleChangeCourse} />
          </form>

          <form>
            <i className="fas fa-graduation-cap"></i>
            <input type="number" name="grade" placeholder="Grade" value={this.state.grade} onChange={this.handleChangeGrade} />
          </form>
        </label>
        <br></br>
        <input type="submit" value="Add" onClick={this.handleSubmit}></input>
        <input type="button" onClick={this.resetForm} value="Cancel"></input>

      </div>
    );

  }
}
export default GradeForm;
