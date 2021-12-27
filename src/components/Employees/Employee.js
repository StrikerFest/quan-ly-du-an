import React from "react";

const Employee = (props) => {
  return (
    <div>
      <h1>Nhân viên</h1>
      <table className="main-content" border="2">
        <thead>
          <tr className="font-red">
            <th>Tên nhân viên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Chức vụ</th>
            <th>Xem chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {props.employee.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.tenNhanSu}</td>
              <td>{employee.soDienThoai}</td>
              <td>{employee.email}</td>
              <td>{employee.quyenHan}</td>
              <td>Xem chi tiết</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
