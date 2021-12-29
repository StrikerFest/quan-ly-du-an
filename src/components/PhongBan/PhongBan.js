import React from "react";
import { Link } from "react-router-dom";
const PhongBan = (props) => {
  return (
    <div>
      <h1>Phòng ban</h1>
      <table className="main-content" border="2">
        <thead>
          <tr className="font-red">
            <th>Tên dự án</th>
            <th>Project Manager</th>
            <th>Tên công việc</th>
            <th>Nhân viên được phân công</th>
            <th>Trạng thái</th>
            <th>Thay đổi</th>
            <th>Xóa</th>
            <th>Xem chi tiết</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div>
        <Link to="/phongBan/create">Tạo project mới</Link>
      </div>
    </div>
  );
};

export default PhongBan;
