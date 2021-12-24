import React from "react";

const Employee = (props) => {
  return (
    <div>
      <h1>Nhân viên</h1>
      <table className="main-content" border="2">
        <thead>
          <tr className="font-blue">
            <th>Tên nhân viên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Chức vụ</th>
          </tr>
        </thead>
        <tbody>
          {props.employee.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
