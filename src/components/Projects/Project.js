import React from "react";
import { Link } from "react-router-dom";
const Project = (props) => {
  return (
    <div>
      <h1>Project</h1>
      <table className="main-content" border="2">
        {/* Table head */}
        <thead>
          <tr className="font-red">
            <th>Tên dự án</th>
            <th>Project Manager</th>
            <th>Ngày bắt đầu</th>
            <th>Tổng thời gian làm</th>
            <th>Trạng thái</th>
            <th>Thay đổi</th>
            <th>Xóa</th>
            {/* <th>Xem chi tiết</th> */}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {props.project.map((project) => (
            <tr key={project.id}>
              <td>{project.tenProject}</td>
              <td>
                {props.nhanVien.map((NV) =>
                  project.idProjectManager === NV.id ? NV.tenNhanSu : ""
                )}
              </td>
              <td>{project.ngayBatDau}</td>
              <td>{project.tongThoiGianLam}</td>
              <td>
                {props.trangThaiProject.map((TT) =>
                  project.idTrangThai === TT.id ? TT.tenTrangThai : ""
                )}
              </td>
              {/* Thay đổi */}
              <td>
                  <Link to={"/project/update/" + project.id}>Thay đổi</Link>
              </td>
              {/* Delete */}
              <td>
                <button
                  onClick={() => {
                    props.deleteProject(project.id);
                  }}
                >
                  Delete
                </button>
              </td>
              {/* <td>
                <Link to="/project/chiTiet">Xem chi tiết</Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Link tạo mới */}
      <div>
        <Link to="/project/create">Tạo project mới</Link>
      </div>
    </div>
  );
};

export default Project;
