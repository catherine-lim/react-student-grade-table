import React from 'react';

function Grades(props) {
  return (
    <tbody>
      <tr>
        <td>{props.data.name}</td>
        <td>{props.data.course}</td>
        <td>{props.data.grade}</td>
      </tr>
    </tbody>
  );
}
function GradeTable(props) {
  return (
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>

      {props.grade.map(data => {
        return <Grades key={data.id} data={data}/>;
      })}
    </table>

  );
}

export default GradeTable;
