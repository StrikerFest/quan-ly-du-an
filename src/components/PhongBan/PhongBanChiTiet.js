import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const PhongBan = (props) => {
  const { id } = useParams();
  const [phongBan, setPhongBan] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/vi/phongBan/" + id)
      .then((response) => {
        setPhongBan(response.data);
      });
  }, []);
  return (
    <div>
      <h1>Phòng ban dự án {id}</h1>
      <table className="main-content" border="2">
        {/* Table head */}
        <thead>
          <tr className="font-red">
            <th>Tên dự án X</th>
            <th>Project Manager</th>
            <th>Tên công việc</th>
            <th>Nhân viên được phân công</th>
            <th>Trạng thái</th>
            {/* <th>Thay đổi</th> */}
            <th>Xóa</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {phongBan.map((PB) => (
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
              {/* Hiển thị tên công việc */}
              {props.task.map((T) =>
                PB.idCongViec === T.id ? <td>{T.tenTask}</td> : ""
              )}
              {/* Hiển thị nhân viên được phân công */}
              {props.nhanVien.map((NV) =>
                PB.idNhanVien === NV.id ? <td>{NV.tenNhanSu}</td> : ""
              )}
              {/* Hiển thị trạng thái hiện tại của công việc */}
              {props.task.map((T) =>
                PB.idCongViec === T.id ? (
                  <>
                    {props.trangThaiTask.map((TTT) =>
                      T.idTrangThai === TTT.id ? (
                        <td>{TTT.tenTrangThaiTask}</td>
                      ) : (
                        ""
                      )
                    )}
                  </>
                ) : (
                  ""
                )
              )}
              {/* <td>
                <button>Thay đổi</button>
              </td> */}
              <td>
                <button
                  onClick={() => {
                    props.deletePhongBan(
                      PB.idDuAn,
                      PB.idCongViec,
                      PB.idNhanVien
                    );
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Link tạo mới */}
      <div>
        <Link to="/phongBan/create">Tạo phân công mới</Link>
      </div>
      {/* Link quay về */}
      <div>
        <Link to="/phongBan">Quay lại</Link>
      </div>
    </div>
  );
};

export default PhongBan;
