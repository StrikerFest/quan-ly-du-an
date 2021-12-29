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
            <th>Trạng thái</th>
            <th>Thay đổi</th>
            <th>Xem chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {props.phongBan.map((PB) => (
            <tr key={PB.index}>
              {/* Hiển thị tên project */}
              {props.project.map((P) =>
                PB.idDuAn === P.id ? <td>{P.tenProject}</td> : ""
              )}
              {/* Hiển thị tên project manager */}
              {props.project.map((P) =>
                PB.idDuAn === P.id ? (
                  <>
                    {props.nhanVien.map((NV) =>
                      P.idProjectManager === NV.id ? (
                        <td>{NV.tenNhanSu}</td>
                      ) : (
                        ""
                      )
                    )}
                  </>
                ) : (
                  ""
                )
              )}
              {/* Hiển thị trạng thái hiện tại của công việc */}
              {props.project.map((P) =>
                PB.idDuAn === P.id ? (
                  <>
                    {props.trangThaiProject.map((TTP) =>
                      P.idProjectManager === TTP.id ? (
                        <td>{TTP.tenTrangThai}</td>
                      ) : (
                        ""
                      )
                    )}
                  </>
                ) : (
                  ""
                )
              )}
              <td>Thay đổi</td>
              <td>
                <Link to="/phongBan/chiTiet">Xem chi tiết</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Link to="/phongBan/create">Tạo phân công mới</Link>
      </div>
    </div>
  );
};

export default PhongBan;
