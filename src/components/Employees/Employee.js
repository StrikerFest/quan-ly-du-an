import React from "react";
import { Link } from "react-router-dom";

const Employee = (props) => {
  return (
    <div>
      <h1>Nhân viên</h1>
      <table className="main-content" border="2">
        {/* Table head */}
        <thead>
          <tr className="font-red">
            <th>Tên nhân viên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Chức vụ</th>
            <th>Thay đổi</th>
            <th>Xóa</th>
            {/* <th>Xem chi tiết</th>  */}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {props.employee.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.tenNhanSu}</td>
              <td>{employee.soDienThoai}</td>
              <td>{employee.email}</td>
              <td>
                {employee.quyenHan == 0
                  ? "Super admin"
                  : employee.quyenHan == 1
                  ? "Admin"
                  : employee.quyenHan == 2
                  ? "PM"
                  : employee.quyenHan == 3
                  ? "Nhân viên"
                  : "Lỗi"}
              </td>
              {/* Thay đổi */}
              <td>
                <Link to={"/nhanVien/update/" + employee.id}>Thay đổi</Link>
              </td>
              {/* Delete */}
              <td>
                <button
                  onClick={() => {
                    props.deleteNhanVien(employee.id);
                  }}
                >
                  Delete
                </button>
              </td>
              {/* <td>Xem chi tiết</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Link tạo mới */}
      <div>
        <Link to="/nhanVien/create">Thêm nhân viên mới</Link>
      </div>
    </div>
  );
};

export default Employee;
